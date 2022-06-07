<template>
  <div class="layout">
    <!-- 导航 -->
    <leyout-head></leyout-head>
    <!-- 侧边栏 -->
    <sidebar></sidebar>
    <!-- 页面 -->
    <page-view>
      <router-view></router-view>
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
</style>