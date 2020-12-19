// 基于axios封装的请求模块

import axios from 'axios'
// 创建请求对象
export const request = axios.create({
    // baseURL: 'http://realworld.api.fed.lagounews.com'
    baseURL: 'https://conduit.productionready.io'
    
})
// 通过插件机制获取到上下文对象
// 插件导出函数必须作为 default 成员
export default ({store}) => {
    // 请求拦截器，任何请求都要经过请求拦截器
    // 我们可以在请求拦截器中做一些公共的业务处理，比如设置统一token
    request.interceptors.request.use(function (config) {
        // 请求成功
        // console.log(123)
        const { user } =store.state 
        if (user && user.token) {
            // 屈辱的错误
            // config.headers.Authorization = 'Token ${user.token}'
                    
            config.headers.Authorization = `Token ${user.token}`
        }
        return config
    },  function (error) {
        // 请求失败
        return Promise.reject(error)
    })
}

