<template>
  <div class="sidebar">
    <ul class="list custom-scrollbar">
      <li class="item">
        <router-link class="wrap overflow-1-row" to="/" v-for="(item, index) in 20" :key="index">标题 - {{ item }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'leyoutHead',
  data() {
    return {
      list: [
        { id: 1, name: '笔记', to: 'note' },
        { id: 2, name: '记录', to: 'record' },
        { id: 3, name: '学习', to: 'learn' },
        { id: 4, name: '关于', to: 'about' },
      ]
    }
  },
  computed: {
    routeName({ $route }) {
      let { name } = $route
      return name
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar{
  position: sticky;
  top: 65px;
  left: 0;
  width: 180px;
  height: 0;
  .list{
    background-color: #fff;
    max-height: calc(100vh - 65px);
    padding: 10px 0;
    overflow: auto;
    .item{
      .wrap{
        display: block;
        font-size: 14px;
        text-decoration: none;
        line-height: 2.2;
        color: #909299;
        transition: .3s color;
        &:hover{
          color: $--color-primary;
        }
      }
    }
  }
}
</style>