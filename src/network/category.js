import {request} from './request'


 // 封装获取商品分类的数据函数
 export const getCategory =  () => {
  return request({
    url: '/category',
  })
}

// 封装获取子菜单里的品类数据的函数
export const getVarietice = (maitKey) => {
  return request({
    url: '/subcategory',
    params:{
      maitKey
    }
  })
}

export const getVarieticeGoods = (miniWallkey, type) => {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}



