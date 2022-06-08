<template>
  <div class="page-view" :class="show ? '' : 'nosidebar'">
    <slot></slot>
  </div>
</template>

<script>
export default {
  computed: {
    show({ $route }) {
      let { meta } = $route
      return meta && meta.noSidebar ? false : true
    },
  },
}
</script>

<style lang="scss" scoped>
.page-view{
  padding: 15px 0 30px 205px;
  &.nosidebar{
    padding: 15px 0 30px 0;
  }
}
</style>