<template>
  <div class="note-index context">
    <h2>最近更新</h2>
    <div class="list">
      <div class="item" v-for="(item, index) in list" :key="index"  @click="toTitle(item)">
        <router-link
          class="link"
          :to="{ name: 'learn-article', params: { id: item.id }}"
        >{{ item.title }}</router-link>
        <span class="line"></span>
        <span class="date tip">{{ item.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import list from './list.js';
export default {
  name: 'learnIndex',
  data () {
    return {
      list
    }
  },
  methods: {
    toTitle({ title }) {
      document.title = title
    }
  },
}
</script>

<style lang="scss" scoped>
.note-index {
  h2{
    width: 600px;
    margin: 10px auto auto;
  }
  .list {
    width: 600px;
    margin: 15px auto auto;
    font-size: 16px;
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 2;
      .line {
        flex: auto;
        border-top: 1px dashed #ccc;
        margin: 0 20px;
      }
      .date {
        letter-spacing: 1px;
      }
    }
  }
}
</style>