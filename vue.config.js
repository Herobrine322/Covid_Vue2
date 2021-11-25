module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // 测试环境
                target: 'https://interface.sina.cn/',  // 接口域名
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/api': ''   //需要rewrite重写的,
                }
            },
            '/api/travel': {
                target: 'http://apis.juhe.cn',
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/api/travel': ''   //这里需要rewrite重写的,写嗨
                }

            }
        }
    },
    // 打包上传的时候根据开发环境或者生产环境，来打包上传时候发生的路径问题
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
}