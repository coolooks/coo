<template>
  <div class="not">
    <div style="margin:auto;text-align:center">
      <div class="notFound"></div>
      <el-button class="back" type="text" size="large" @click="$router.push('/')">返回首页</el-button>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
export default {
  name: 'notFound',
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  mounted() {
    let { origin, pathname } = window.location
    lottie.loadAnimation({
      container: document.querySelector('.notFound'),
      path: `${origin}${pathname}/images/lf20_u1xuufn3.json`,
      loop: true,
      renderer: 'svg',
    })
  },
}
</script>

<style scoped>
.not{
  display: flex;
  height: 100vh;
  overflow: hidden;
}
.notFound{
  width: 600px;
  height: 450px;
  margin: auto;
}
</style>