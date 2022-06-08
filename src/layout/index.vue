<template>
  <div class="layout">
    <!-- 导航 -->
    <leyout-head></leyout-head>
    <!-- 侧边栏 -->
    <sidebar></sidebar>
    <!-- 页面 -->
    <page-view>
      <!-- <transition name="fade" mode="out-in"> -->
        <router-view :key="$route.fullPath"></router-view>
      <!-- </transition> -->
    </page-view>
  </div>
</template>

<script>
import leyoutHead from './head';
import sidebar from './sidebar';
import pageView from './pageView';
export default {
  name: 'baseLayout',
  components: {
    leyoutHead,
    sidebar,
    pageView
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped>
.layout{
  width: $page-width;
  margin: 0 auto;
  position: relative;
  color: #303133;
}

//globl transition css

/*fade*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>