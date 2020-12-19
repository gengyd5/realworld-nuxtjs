// Nuxt.js配置文件

module.exports = {
    router: {
        // 处理导航链接高亮
        linkActiveClass: 'active',  
        // 自定义路由表规则
        extendRoutes (routes, resolve) {
        //    console.log(routes) 输出路由数组
            // 清空默认路由表规则
            routes.splice(0)

            routes.push( ...[
                {
                    path: '/',
                    component: resolve(__dirname, 'pages/layout/'),
                    children: [
                        {
                            path: '', //默认子路由
                            name: 'home',
                            component: resolve(__dirname, 'pages/home/'),
                        },
                        {
                            path: '/login', //默认子路由
                            name: 'login',
                            component: resolve(__dirname, 'pages/login/'),
                        },
                        {
                            path: '/register', 
                            name: 'register',
                            component: resolve(__dirname, 'pages/login/'),
                        },
                        {
                            path: '/profile/:username', //个人资料
                            name: 'profile',
                            component: resolve(__dirname, 'pages/profile/'),
                        },
                        {
                            path: '/settings', 
                            name: 'settings',
                            component: resolve(__dirname, 'pages/settings/'),
                        },
                        {
                            path: '/editor', 
                            name: 'editor',
                            component: resolve(__dirname, 'pages/editor/'),
                        }, {
                            path: '/article/:slug', 
                            name: 'article',
                            component: resolve(__dirname, 'pages/article/'),
                        }
                    ]
                }
            ])

        }
    },
    server: {
        host: '0.0.0.0',
        port: 3000
    },
    // 注册插件
    plugins: [
        '~/plugins/request.js',
        '~/plugins/dayjs.js'
    ]
}


