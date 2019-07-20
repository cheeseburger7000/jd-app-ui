<template>
    <div>
        <img class="headerImg" src="../assets/ai-mvp.png" alt="">
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler">
        </cube-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            model: {
                userName: '',
                password: ''
            },
            schema: {
                fields: [
                    // 配置用户名
                    {
                        type: 'input',
                        modelKey: 'userName',
                        label: '用户名',
                        props: {
                            placeholder: '请输入用户名'
                        },
                        rules: {
                            required: true,
                            type: 'string',
                            min: 3,
                            max: 15
                        },
                        trigger: 'blur',
                        messages: {
                            required: '用户名不能为空',
                            min: '用户名不能少于3个字符',
                            max: '用户名不能多于15个字符',
                        }
                    },
                    // 配置密码
                    {
                        type: 'input',
                        modelKey: 'password',
                        label: '密码',
                        props: {
                            placeholder: '请输入密码',
                            type: 'password',
                            eye: {
                                open: false
                            }
                        },
                        rules: {
                            required: true,
                        },
                        trigger: 'blur',
                    },
                    // 配置登录按钮
                    {
                        type: 'submit',
                        label: '登录'
                    }
                ]
            }
        }
    },
    methods: {
        // ES7 async await
        async submitHandler(e) {
            e.preventDefault();

            try {
                const result = await this.$http.get('/api/login', {params: this.model})
                console.log(result.code)
                if (result.code == 1002) {
                    //alert(result.data.message);
                    const token = result.token
                    this.$store.commit('setToken', token)
                    window.localStorage.setItem('token', token)
                    // 防止用户返回上一级, 因此使用replace
                    this.$router.replace({path: 'index'})
                } else {
                    alert(result.message);
                }
            } catch(err) {
                alert('发生未知的错误...');
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .headerImg
        height 150px
        width 100%
</style>
