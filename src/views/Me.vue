<template>
    <div>
        <img class="headerImg" src="../assets/ai-mvp.png" alt="">
        <ul>
            <li class="mineitem" v-for="item in minearray" @click="itemClick(item)" :key="item.label">
                <span class="minetitle">{{ item.label }}</span>
                <i class="cubeic-arrow"></i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            minearray: [
                {label: '商品收藏'},
                {label: '我的足迹'},
                {label: '店铺收藏'},
                {label: '我的订单'},
                {label: '退出', type: 'exit'},
            ]
        }
    },
    methods: {
        itemClick(item) {
            if (item.type == 'exit') {
                // TODO 将即将退出用户的购物车信息存储到数据库中
                
                this.$store.commit('setToken', '')
                localStorage.removeItem('token')
                this.$router.push({path: '/login'})
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .headerImg
        height 150px
        width 100%
    .mineitem
        font-size 14px
        text-align left 
        height 50px
        line-height 50px
        padding-left 5%
        border-bottom 1px solid #eee
        .minetitle
            display inline-block
            width 90%
</style>
