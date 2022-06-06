<template>
  <div class="home">
    <div class="left">
      <h2 class="name">Connor Zhang</h2>
      <p class="sub">Think twice, code once.</p>
    </div>
    <div class="right">
      <div class="contain" id="contain"></div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
import lottleJSON from '@/assets/images/lf20_nedzkmew.json';
export default {
  name: 'homePage',
  mounted() {
    lottie.loadAnimation({
      container: document.querySelector('#contain'),
      // path: lottleJSON,
      loop: true,
      renderer: 'svg',
      animationData: lottleJSON
    })
  },
}
</script>

<style lang="scss" scoped>
.home{
  background: linear-gradient(135deg, #0b3d91 38.2%, #fff 38.2%, #fff 100%);
  height: 100vh;
  overflow: hidden;
  display: flex;
  .left{
    flex: none;
    width: 50%;
    padding: 150px 0 0 180px;
    color: #fff;
    text-shadow: 0 4px 8px rgba($color: #0b3d91, $alpha: 0.6);
    .name{
      font-size: 60px;
      font-weight: 700;
    }
    .sub{
      margin-top: 40px;
      font-size: 40px;
      margin-left: 260px;
      white-space: nowrap;
    }
  }
  .right{
    flex: none;
    width: 55%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    .contain{
      height: 650px;
    }
  }
}
</style>