import path from 'path'
import fs from 'fs'
import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import type Token from 'markdown-it/lib/token'
import type Renderer from 'markdown-it/lib/renderer'
import { highlight } from './highlight'
import { docRoot } from './paths'

const localMd = MarkdownIt()
const scriptSetupRE = /<\s*script[^>]*\bsetup\b[^>]*/

interface ContainerOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?(
    tokens: Token[],
    index: number,
    options: any,
    env: any,
    self: Renderer
  ): string
}

export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx) {
      const data = (md as any).__data
      const hoistedTags: string[] = data.hoistedTags || (data.hoistedTags = [])

      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''

        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            path.resolve(docRoot, '.vitepress/views', `${sourceFile}.vue`),
            'utf-8'
          )
          const existingScriptIndex = hoistedTags.findIndex((tag) => scriptSetupRE.test(tag))
          if (existingScriptIndex === -1) {
            hoistedTags.push(`
    <script setup>
    const demos = import.meta.globEager('../../.vitepress/views/${
      sourceFile.split('/')[0]
    }/*.vue')
    </script>`)
          }
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)

        return `<Demo :demos="demos" source="${encodeURIComponent(
          highlight(source, 'js')
        )}" path="${sourceFile}" raw-source="${encodeURIComponent(
          source
        )}" description="${encodeURIComponent(localMd.render(description))}">`
      }

      return '</Demo>'
    }
  } as ContainerOpts)
}

export default {}
