<template>
  <div class="main">
    <router-link to="/home">home</router-link> | 
    <router-link to="/about">about</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.main{
  text-align: center;
}
</style>