module.exports = {
    base:'/vue3-vite-cli/',
    title: 'Vue3-Vite-Cli 中文文档',
    description: '基于vite为基础搭建的风格脚手架,以便于更高效的解决业务需求！',
    lang: 'zh-CN',
    docsDir: 'docs',
    editLink: true,
    editLinkText: '欢迎帮助我们改善页面!',
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.jpeg' }]],
    themeConfig:{
        nav: [
            { text: '入门', link: '/getting/why.html' },
            { text: '模板', link: '/template/template-vue3-ts-initial.html' },
            { text: '相关文档', link: '/documentation/vue.html' },
            { text: 'GitHub', link: 'https://github.com/wushijiang13/vue3-vite-cli' },
            { text: '码云', link: 'https://gitee.com/wushijiang13/vue3-vite-cli' },
        ],
        sidebar: {
            // '/getting/': 'auto',
            '/': [
                {
                    text: '入门',
                    children: [
                        {
                            text: '什么是 Vue3-Vite-Cli ？',
                            link: '/getting/why.html'
                        },
                        {
                            text: '模板脚手架简介',
                            link: '/getting/template_introduction.html'
                        }
                    ]
                },
                {
                    text: '模板内部结构解析',
                    children: [
                        {
                            text: 'template-vue3-ts-initial.html',
                            link: '/template/template-vue3-ts-initial.html'
                        },
                        {
                            text: 'template-webpack-protist-js.html',
                            link: '/template/template-webpack-protist-js.html'
                        }
                    ]
                },
                {
                    text: '相关文档',
                    children: [
                        {
                            text: 'vue文档',
                            link: '/documentation/vue.html'
                        },
                        {
                            text: 'webpack文档',
                            link: '/documentation/webpack.html'
                        }
                    ]
                }
            ]
        }
    }
}