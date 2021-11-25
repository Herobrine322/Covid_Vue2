module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],         // 按需引入vant相关组件
  "plugins": [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }, 'vant']
  ]
}
