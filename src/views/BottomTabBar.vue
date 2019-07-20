<template>
  <div>
    <transition :name="transitionName"> <!--  Vuejs官方API -->
      <router-view class="Router"></router-view>
    </transition>
    <cube-tab-bar
        v-model="selectedLabelDefault"
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler"
        class="botnav">
    </cube-tab-bar>
    <span class="countsum">{{ countsum }}</span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      //countsum: 10,
      transitionName: 'slide-right',
      selectedLabelDefault: '首页',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '分类',
        icon: 'cubeic-tag'
      }, {
        label: '搜索',
        icon: 'cubeic-search'
      }, {
        label: '购物车',
        icon: 'cubeic-mall'
      }, {
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
        switch(label) {
            case '首页':
                this.$router.push({path: '/bottomTabBar/index'});
            break;
            case '分类':
                this.$router.push({path: '/bottomTabBar/list'});
            break;
            case '搜索':
                this.$router.push({path: '/bottomTabBar/search'});
            break;
            case '购物车':
                this.$router.push({path: '/bottomTabBar/cart'});
            break;
            case '我的':
                this.$router.push({path: '/bottomTabBar/me'});
            break;
        }
    }
  },
  created() {
    // 根据当前路由, 设置底部工具栏的位置
    switch(this.$route.path) {
      case '/bottomTabBar/index':
        this.selectedLabelDefault = '首页';
      break;
      case '/bottomTabBar/list':
        this.selectedLabelDefault = '分类';
      break;
      case '/bottomTabBar/search':
        this.selectedLabelDefault = '搜索';
      break;
      case '/bottomTabBar/cart':
        this.selectedLabelDefault = '购物车';
      break;
      case '/bottomTabBar/me':
        this.selectedLabelDefault = '我的';
      break;
    }
  },
  computed: {
    ...mapGetters({
      // 获取vuex的countsum
      // ES6
      countsum: 'countsum'
    })
  }
}
</script>

<style lang="stylus">
    .cube-tab-bar.botnav
        position fixed
        bottom 0
        left 0
        z-index 1000
        width 100%
        background #fff
        .cube-tab div
            font-size 16px
            padding-top 3px
        i
            font-size 20px
    .Router
        position absolute
        width 100%
        transition all 0.8s ease
    .slide-left-enter,.slide-right-leave-active
        opacity 0
        -webkit-transform translate(100%,0)
        transform translate(100%,0)
    .slide-left-leave-active,.slide-right-enter
        opacity 0
        -webkit-transform translate(-100%,0)
        transform translate(-100%,0)
    .countsum
        position fixed
        bottom 33px
        right 23%
        z-index 1001
        width 18px
        height 19px
        border-radius 50%
        line-height 18px
        font-size 14px
        background red
        color #fff
</style>
