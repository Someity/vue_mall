import {request} from './request'
// ------------获取详情页数据---------------

export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
// 推荐数据
export function getRecommend(){
  return request({
    url:'recommend'
  })
}
// 商品介绍的数据对象
export class GoodInfo {
  constructor(itemInfo, columns, services) {
    // 标题
    this.title = itemInfo.title;
    // 优惠描述
    this.discounts = itemInfo.discountDesc;
    // 商品描述
    this.desc = itemInfo.desc;
    // 价格
    this.newPrice = itemInfo.price;
    // 原始价格
    this.oldPrice = itemInfo.oldPrice;
    // 活动标签颜色
    this.discountBgColor = itemInfo.discountBgColor;
    // 不带￥的原价格
    this.realPrice = itemInfo.lowNowPrice;
    // 销量和收藏
    this.columns = columns;
    // icon图标和文字
    this.services = services;
  }
}
// 店铺的数据对象
export class Shop {
  constructor(shopInfo) {
    // 商家图片
      this.logo = shopInfo.shopLogo;
      // 商家名称
      this.name = shopInfo.name;
      // 
      this.fans = shopInfo.cFans;
      // 销量
      this.sells = shopInfo.cSells;
      // 店铺描述
      this.score = shopInfo.score;
      //  商品件数
      this.goodsCount = shopInfo.cGoods;
  }
}
// 商品尺码参数等数据对象
export class GoodsParam {
  constructor(info, rule) {
      this.images = 'images' in info ? info.images[0] : '',
          this.infos = info.set,
          this.sizes = rule.tables
  }
}
