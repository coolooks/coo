<template>
  <div class="main">
    <div class="markdown-body" v-html="htmlText">sdfsdfsdf</div>
  </div>
</template>

<script>
import { marked } from 'marked';
import detail from './note/detail.md';
export default {
  name: 'detailPage',
  data() {
    return {
      htmlText: '',
    }
  },
  created() {
    this.htmlText = marked.parse(detail)
  },
}
</script>

<style lang="scss" scoped>

</style>