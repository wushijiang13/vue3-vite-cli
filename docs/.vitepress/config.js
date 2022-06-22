module.exports = {
    base:'/vue3-vite-cli/',
    title: 'Vue3-Vite-Cli 中文文档',
    description: '基于vite为基础搭建的风格脚手架,提供多种模板以便于更高效的解决业务需求！',
    lang: 'zh-CN',
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.jpeg' }]],
    themeConfig:{
        repo: 'wushijiang13/vue3-vite-cli',
        repoLabel:'GitHub',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '欢迎帮助我们改善页面!',
        lastUpdated: '最近更新时间',
        algolia: {
            appId: 'ZAT3YFXI7L',
            apiKey: 'ebb9fb0d47df4b30f9e94428e89dad61',
            indexName: 'vue3-vite-cli'
        },
        nav: [
            { text: '入门', link: '/getting/why.html' },
            { text: '模板', link: '/template/template-vue3-ts-initial.html' },
            { text: '相关文档', link: '/documentation/vue.html' },
            { text: '码云', link: 'https://gitee.com/wushijiang13/vue3-vite-cli' },
        ],
        sidebar: {
            // '/getting/': 'auto',
            '/': [
                {
                    text: '入门',
                    children: [
                        {
                            text: '简介',
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
                            text: 'vue3-ts-initial',
                            link: '/template/template-vue3-ts-initial.html'
                        },
                        {
                            text: 'webpack-protist-js',
                            link: '/template/template-webpack-protist-js.html'
                        }
                    ]
                },
                {
                    text: '相关文档',
                    children: [
                        {
                            text: 'Vue 相关文档',
                            link: '/documentation/vue.html'
                        },
                        {
                            text: 'Webpack 相关文档',
                            link: '/documentation/webpack.html'
                        }
                    ]
                }
            ]
        }
    }
}