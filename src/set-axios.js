/** HTTP全局拦截 */
import axios from 'axios'
import store from './store'
import router from './router'

export default function setAxios() {
    // 拦截HTTP请求将token放入请求头中
    axios.interceptors.request.use(config => {
        if (store.state.token) {
            config.headers.token = store.state.token
        }
        return config
    })

    // 拦截HTTP响应，处理token过期
    axios.interceptors.response.use(res => {
        if (res.status == 200) {
            const data = res.data
            if (data.code == -1) {
                store.commit('setToken', '')
                localStorage.removeItem('token')
                // TODO 为什么使用replace跳转
                router.replace({path: '/login'})
            }
            return data
        }
        return res
    })
}