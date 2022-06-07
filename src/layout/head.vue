<template>
  <header class="leyout-head">
    <div class="left" @click="$router.push('/')">A small FE ~~</div>
    <div class="right">
      <ul class="nav-list">
        <router-link
          class="nav-item"
          tag="li"
          v-for="(item, index) in list"
          :key="index"
          :class="routeName === item.to ? 'on' : ''"
          :to="{ name: item.to }"
        >{{item.name}}</router-link>
      </ul>
    </div>
  </header>
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
      let { matched } = $route
      return (matched && matched.length) ? matched[0].name : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.leyout-head{
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  background-color: #fff;
  height: 65px;
  border-bottom: 1px solid #e8e8e8;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left{
    font-weight: 700;
    font-size: 20px;
    color: $--color-primary;
    cursor: pointer;
  }

  .right{
    .nav-list{
      display: flex;
      align-items: center;
      .nav-item{
        padding: 0 20px;
        line-height: 64px;
        cursor: pointer;
        position: relative;
        opacity: .75;
        &.on, &:hover{
          color: $--color-primary;
          opacity: 1;
        }
        &.on{
          &::after{
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            height: 2px;
            width: 2em;
            background-color: $--color-primary;
          }
        }
      }
    }
  }
}
</style>