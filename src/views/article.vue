<template>
  <div class="main">
    <div class="markdown-body" v-highlight v-html="htmlText"></div>
  </div>
</template>

<script>
import "highlight.js/styles/stackoverflow-light.css";
import { marked } from 'marked';
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
    this.htmlText = marked(detail)
    this.$nextTick(() => {
      //js代码 随便加在某个全站调用的js文件中即可
      var aTagArr = [].slice.apply(document.getElementsByTagName("a"));
      var myhost = window.location.host;
      aTagArr.forEach(function (e) {
        if(!e.href) return false;
        let ohost = e.href.match(/:\/\/(.*?)\//i);
        ohost[1] != myhost ? e.target = "_blank" : null;
      });
    })
  },
}
</script>

<style lang="scss" scoped>
</style>