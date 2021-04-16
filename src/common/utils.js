// 防抖函数 
export function debounce(func,delay){
  let timer = null
  // 返回一个函数
  return function(...args){
    // 判断是否有这个定时器有了就结束 
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      // 调用这个函数
      func.apply(this,args)
    }, delay);
  }
}