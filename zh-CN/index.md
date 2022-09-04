---
layout: home

title: IBPE
titleTemplate: Innovative Base of Physics Experiment

hero:
  name: Innovative Base of Physics Experiment
  text: 
  tagline: 华中科技大学物理实验创新基地
  actions:
    - theme: brand big
      text: 了解更多
      link: /zh-CN/guide/info

features:
  - title: 📖阅读小组
    details: 阅读+听课+思考+讨论=高效的学习方法
  - title: 🏆 探究小组
    details: 探究是获得真理的必经之路
  - title: 📜 IRL编辑部
    details: IBPE Review Letters，我们自己的期刊
---


<script setup>
import { onMounted } from 'vue'
import pk from 'vitepress-theme-vuetom/package.json'


function fetchReleaseTag() {
  onMounted(() => {
    const mainTitle = document.getElementsByClassName('name')[0]
    mainTitle.style.position = 'relative'
    const docsReleaseTag = document.createElement('span')
    docsReleaseTag.classList.add('release-tag')
    const releaseTagName = `v0.0.1`
    docsReleaseTag.innerText = releaseTagName
    if (releaseTagName !== undefined) {
      mainTitle.appendChild(docsReleaseTag)
    } 
    // fetch('https://api.github.com/repos/vitejs/docs-cn/releases/latest')
    //   .then((res) => res.json())
    //   .then((json) => {
    //     const mainTitle = document.getElementById('main-title')
    //     mainTitle.style.position = 'relative'

    //     const docsReleaseTag = document.createElement('span')
    //     docsReleaseTag.classList.add('release-tag')
    //     const releaseTagName = json.tag_name
    //     docsReleaseTag.innerText = releaseTagName

    //     if (releaseTagName !== undefined) {
    //       mainTitle.appendChild(docsReleaseTag)
    //     }
    //   })
  })
}

fetchReleaseTag()
</script>

<style>
.sponsors {
  padding: 0 1.5rem 2rem;
  font-size: 0.8rem;
}

.sponsors a {
  color: #999;
  margin: 1em;
  display: block;
}

.sponsors img {
  max-width: 160px;
  max-height: 40px;
}

.sponsors.frontpage {
  text-align: center;
}

.sponsors.frontpage img {
  display: inline-block;
  vertical-align: middle;
}

.sponsors.frontpage h2 {
  color: #999;
  font-size: 1.2rem;
  border: none;
}

.sponsors.sidebar a img {
  max-height: 36px;
}

.platinum-sponsors {
  margin-bottom: 1.5em;
}

.platinum-sponsors a img {
  max-width: 240px;
  max-height: 60px;
}

.gold-sponsors {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

/* special cases */
#sponsor-mux {
  padding: 5px 0;
  min-height: 36px;
}
</style>