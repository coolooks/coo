<template>
  <div class="home">
    <div class="left" @mouseenter="bgAnime = true" @mouseleave="bgAnime = false">
      <h2 class="name">Connor Zhang</h2>
      <p class="sub">Think twice, code once.</p>
      <router-link class="enter" to="/note">Enter <i class="el-icon-right"></i></router-link>
    </div>
    <div class="right">
      <div class="contain" id="contain"></div>
    </div>
    <div class="bg" :class="bgAnime ? 'anime' : ''"></div>
  </div>
</template>

<script>
import lottie from 'lottie-web';
export default {
  name: 'homePage',
  data() {
    return {
      bgAnime: false
    }
  },
  mounted() {
    let { origin, pathname } = window.location
    lottie.loadAnimation({
      container: document.querySelector('#contain'),
      path: `${origin}${pathname}/images/lf20_nedzkmew.json`,
      loop: true,
      renderer: 'svg',
      // animationData: lottleJSON
    })
  },
}
</script>

<style lang="scss" scoped>
.home{
  height: 100vh;
  overflow: hidden;
  display: flex;
  position: relative;
  transform-style: preserve-3d;
  perspective: 500px;
  .bg{
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(135deg, #0b3d91 38.2%, #fff 38.2%);
    transition: all .5s;
    &.anime{
      transform: translate3d(200px, 100px, 200px);
    }
  }
  .left{
    flex: none;
    width: 50%;
    padding: 150px 0 0 180px;
    color: #fff;
    text-shadow: 0 4px 10px rgba($color: #0b3d91, $alpha: 0.7);
    // background-color: #eee;
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
    .enter{
      display: block;
      margin-top: 20px;
      margin-left: 260px;
      color: #fff;
      font-size: 30px;
      cursor: pointer;
      transition: .3s all;
      &:hover{
        transform: translateX(6px);
      }
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