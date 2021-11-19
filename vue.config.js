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
            }
        }
    }
}