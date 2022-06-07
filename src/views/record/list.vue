<template>
  <div class="note-list">
    <h1 v-for="(item, index) in 50" :key="index">record-list</h1>
  </div>
</template>

<script>
export default {
  name: 'noteList'
}
</script>

<style lang="scss" scoped>
.note-list{
}
</style>