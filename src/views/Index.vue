<template>
    <div id="index">
        <cube-slide ref="slide" :data="items" @change="changePage">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a :href="item.url">
                    <img class="banner" :src="item.image">
                </a>
            </cube-slide-item>
        </cube-slide>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  async created() {
      try {
        // DOM加载之前调用后端API获取轮播图数据
        const items = await this.$http.get('/api/banner')
        this.items = items.data
      } catch(err) {
        alert('发生未知的错误...');
      }
  },
  methods: {
    changePage(current) {
      //console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    }
  }
}
</script>

<style lang="stylus" scoped>
    #index
        a
            .banner
                display block
                width 100%
                height 175px
</style>
