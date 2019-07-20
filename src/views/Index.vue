<template>
    <div id="index">
      <!-- 轮播图 -->
        <cube-slide ref="slide" :data="items" @change="changePage">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a :href="item.url">
                    <img class="banner" :src="item.image">
                </a>
            </cube-slide-item>
        </cube-slide>
        <!-- 滑动分类 -->
        <cube-slide ref="slideLists" :auto-play="false" :data="rollingLists">
            <cube-slide-item v-for="(list, index) in rollingLists" :key="index">
                <ul class="listUl">
                  <li class="listLi" v-for="(item, otherIndex) in list" :key="otherIndex">
                    <a :href="item.url"> 
                      <img :src="item.image" alt="">
                      <p>{{ item.label }}</p>
                    </a>
                  </li>
                </ul>
            </cube-slide-item>
        </cube-slide>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [], // 轮播图数组
      rollingLists: [], // 滑动分类数组
    }
  },
  async created() {
      try {
        // DOM加载之前调用后端API获取轮播图数据
        const items = await this.$http.get('/api/banner')
        this.items = items.data
        
        // 获取滑动分类数据
        const rollingLists = await this.$http.get('/api/rolling')
        this.rollingLists = rollingLists.data
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
        .listUl
            display flex
            flex-wrap wrap
        .listLi
            width 20%
            justify-content center
            img 
                width 35px
                height 35px
                border-radius 50%
                padding 5px 0
            p
                font-size 14px
                padding-bottom 10px
</style>
