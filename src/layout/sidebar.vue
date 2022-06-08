<template>
  <div class="sidebar" v-if="show">
    <ul class="list custom-scrollbar">
      <li class="item" v-for="(item, index) in list" :key="index">
        <router-link class="wrap overflow-1-row" :class="$route.params.id === item.id ? 'on' : ''" :to="{ name: routeName + '-article', params: { id: item.id }}">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sideBar',
  data() {
    return {
      list: []
    }
  },
  computed: {
    show({ $route }) {
      let { meta } = $route
      return meta && meta.noSidebar ? false : true
    },
    routeName({ $route }) {
      let { matched } = $route
      return (matched && matched.length) ? matched[0].name : ''
    }
  },
  methods: {
    requireHandler() {
      if (this.routeName === 'about') return false
      this.list = require(`@/views/${this.routeName}/list.js`).default
    },
  },
  created() {
    this.requireHandler()
  },
  watch: {
    routeName() {
      this.requireHandler()
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
        font-size: 16px;
        text-decoration: none;
        line-height: 2.2;
        color: #909299;
        transition: .3s color;
        &.on, &:hover{
          color: $--color-primary;
        }
      }
    }
  }
}
</style>