<template>
    <div class="panelsbox">
        <cube-scroll class="leftpanels">
            <ul>
                <li v-for="(list, index) in tabslabel" @click="selectlist(index)" :class="list.active? 'active': ''" :key="index">
                    {{ list.label }}
                </li>
            </ul>
        </cube-scroll>
        <cube-scroll class="rightpanels">
            <ul>
                <li v-for="(tag, index) in tags" :key="index">
                    <img :src="tag.image" alt="">
                    <p>{{ tag.label }}</p>
                </li>
            </ul>
        </cube-scroll>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tags: [],
            tabslabel: [
                {
                    label: '热门推荐',
                    active: true    
                },
                {
                    label: '手机数码',
                    active: false    
                },
                {
                    label: '家用电器',
                    active: false   
                },
                {
                    label: '热门推荐',
                    active: false    
                },
                {
                    label: '手机数码',
                    active: false    
                },
                {
                    label: '热门推荐',
                    active: false    
                },
                {
                    label: '手机数码',
                    active: false    
                },
            ]
        }
    },
    methods: {
        // 点击分类标签, 获取相关的数据
        selectlist(index) {
            this.tabslabel.forEach((value, otherIndex) => {
                if (index == otherIndex) {
                    value.active = true
                } else {
                    value.active = false
                }
            })
            this.getclassify(index)
            
        },
        // 根据index获取分类数据
        async getclassify(index) {
            const result = await this.$http.get('/api/classify', {params: {type: index}})
            this.tags = result.data
        }
    },
    // 数据初始化: 请求后端API, 将后端响应的属性赋值给data中的属性
    created() {
        // 获取默认分页数据
        this.getclassify(0)
    }
}
</script>

<style lang="stylus" scoped>
    .panelsbox
        display flex
        .leftpanels
            width 30%
            li
                height 50px
                line-height 50px
                border-bottom 1px solid #fff
                color #333
                background #f8f8f8
                font-size  14px
            .active
                background #fff
                color #e93b3d
        .rightpanels
            width 70%
            ul
                display flex
                flex-wrap  wrap
                li
                    width 50%
                    justify-content center
                    align-items center
                    font-size 15px
                    img 
                        width 80px
                        height  80px
</style>