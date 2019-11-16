module.exports = {
  devServer: {
    proxy: {
      '/myapi': {
        target: 'https://m.wowdsgn.com',
        changeOrigin: true,
        pathRewrite: {
          '^/myapi': ''
        }
      }
    }
  }
}
// https: //m.douyu.com/api/room/list?page=1&type=yz
// https://api.bilibili.com/x/web-interface/ranking/region?rid=47&day=7
// https://m.douyu.com/api/room/list?page=1&type=yz
// https://m.wowdsgn.com/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1573280550467
