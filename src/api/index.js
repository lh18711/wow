import request from '../utils/request'
export const getWowIndex = (val, val1) => { //获取主页信息
  return request({
    url: `/myapi/v2/page?pageId=1&tabId=${val1}&currentPage=${val}&pageSize=8&_=1573280550467`
  })
}
export const getCdetail = (id, sort, order, page) => { //获取分类页信息
  return request({
    url: `/myapi/pages/category/${id}?currentPage=${page}&sort=${sort}&order=${order}&_=1573478159647`
  })
}
export const getSearch = (id, sort, order, page) => { //获取搜索信息
  return request({
    url: `/myapi/product/search?keyword=${id}&sort=${sort}&order=${order}&currentPage=${page}&_=1573549261050`
  })
}
export const getDetail = (id, sort, order, page) => { //获取详情
  return request({
    url: `/myapi/product/search?keyword=${id}&sort=${sort}&order=${order}&currentPage=${page}&_=1573549261050`
  })
}
export const aboutItem = (id) => { //相关商品
  return request({
    url: `/myapi/recommend/item?skuId=${id}&_=1573559227365`
  })
}
export const like = (id) => { //是否已喜欢
  return request({
    url: `/myapi/user/product/isMyfavoriteProduct?productId=${id}&_=1573562493449`
  })
}
export const itemDetail = (id) => { //商品详情
  return request({
    url: `/myapi/itemdetail/skuInfos/${id}?_=1573559227351`
  })
}
export const itemImg = (pId) => { //商品展示
  return request({
    url: `/myapi/itemdetail/spuInfos/${pId}?_=1573559227353`
  })
}
export const CartCount = () => { //购物车内商品个数
  return request({
    url: `/myapi/cart/itemQty?_=1573559227359`
  })
}
export const cartCard = (id) => { //购物车选项卡
  return request({
    url: `/myapi/itemdetail/spec/specific/${id}?_=1573564836424`
  })
}
export const buyNow = (id) => { //购物车选项卡
  return request({
    url: `/myapi/itemdetail/spec/toBuyNow/${id}?_=1573564836424`
  })
}
export const likeit = (id) => { //是否喜欢
  return request({
    url: `/myapi/user/product/favorite?productId=${id}&_=1573623733516`
  })
}
export const message = () => { //消息页
  return request({
    url: `/myapi/message/messageMain?_=1573654052444`
  })
}
export const messageList = (page) => { //消息列表页
  return request({
    url: `/myapi/message/messageList?msgType=2&currentPage=${page}&pageSize=10&_=1573694986126`
  })
}
export const order = (id, qty) => { //订单页
  return request({
    url: `/myapi/order/settleFromBuyNow?productId=${id}&productQty=${qty}&_=1573700852972`
  })
}
export const myFavourite = (page) => { //订单页
  return request({
    url: `/myapi/user/product/favorite-list?pageSize=10&currentPage=${page}&_=1573723890480`
  })
}
