<template>
  <div class="main">
    <div class="markdown-body" v-highlight v-html="htmlText"></div>
  </div>
</template>

<script>
import "highlight.js/styles/stackoverflow-light.css";
import { marked } from 'marked';
import NProgress from 'nprogress'
export default {
  name: 'articlePage',
  props: ['id'],
  data() {
    return {
      htmlText: '',
    }
  },
  computed: {
    routeName({ $route }) {
      let { matched } = $route
      return (matched && matched.length) ? matched[0].name : ''
    }
  },
  created() {
    const detail = require(`./${this.routeName}/${this.id}.md`).default
    this.htmlText = marked.parse(detail)
    let titleDOM = this.htmlText.match(/<h1[^>]*>(?:.|[\r\n])*<\/h1>/)[0]
    let title = document.createElement('div')
    title.innerHTML = titleDOM
    document.title = title.children[0].innerText
    this.$nextTick(() => {
      // md文件链接，为所有超链接添加_blank属性
      var aTagArr = [].slice.apply(document.getElementsByTagName("a"));
      var myhost = window.location.host;
      aTagArr.forEach(function (e) {
        if(!e.href) return false;
        let ohost = e.href.match(/:\/\/(.*?)\//i);
        ohost[1] != myhost ? e.target = "_blank" : null;
      });

      // 
      NProgress.done()
    })
  },
}
</script>

<style lang="scss" scoped>
</style>