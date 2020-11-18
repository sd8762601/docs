const nav = require('./config/nav.js');
module.exports = {
    theme: 'vdoing',
    title: '路远行至',
    description: 'web前端技术博客,简洁至上,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github等技术文章。', // 描述,以 <meta> 标签渲染到页面html中
    // base: '/', // '/<github仓库名>/'， 默认'/'
    head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
        ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
        ['meta', { name: 'keywords', content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown' }],
        ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }],// 百度统计的站点拥有者验证
        ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' }], // 移动端阻止页面缩放
    ],
    markdown: {
        lineNumbers: true // 代码行号
    },
    themeConfig: {
        // 以下配置是Vdoing主题改动的和新增的配置

        // category: true, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
        // tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的front matter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
        // archive: true, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
        // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
        // bodyBgImg: '/img/background.jpg',
        //  [
        //     '/img/background.jpg',
        //     'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
        // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
        // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0 ~ 1.0, 默认0.5
        // titleBadge: true, // 文章标题前的图标是否显示，默认true
        // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
        //   '图标地址1',
        //   '图标地址2'
        // ],
        // contentBgStyle: 1, // 文章内容块的背景风格，默认无。 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状
        // sidebarOpen: true, // 初始状态是否打开侧边栏，默认true
        // updateBar: { // 最近更新栏
        // showToArticle: true, // 显示到文章页底部，默认true
        // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
        // },
        // pageButton: false, // 是否显示快捷翻页按钮，默认true
        nav,
        logo: '/img/logo.jpeg',
        sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
        author: { // 文章默认的作者信息，可在.md文件front matter中单独配置此信息 String | {name: String, link: String}
            name: 'Hammer King', // 必需
            link: 'https://github.com/xugaoyi' // 可选的
        },
        blogger: { // 博主信息，显示在首页侧边栏
            avatar: '/img/avatar.jpg',
            name: 'Hammer King',
            slogan: '真的有这么丝滑吗'
        },
        social: { // 社交图标，显示于博主信息栏和页脚栏
            // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
            icons: [
                {
                    iconClass: 'icon-youjian',
                    title: '发邮件',
                    link: 'mailto:906659553@qq.com'
                },
                {
                    iconClass: 'icon-github',
                    title: 'GitHub',
                    link: 'https://github.com/xugaoyi'
                }
            ]
        },
        footer: { // 页脚信息
            createYear: 2019, // 博客创建年份
            copyrightInfo: 'Hammer King | MIT License', // 博客版权信息，支持a标签
        }
    }
}