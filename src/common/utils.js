// -------------防抖函数 --------------
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
// -------------日期转换----------------
// 将一串10位数的数字转为时间(相当于去除了微秒)
export function formatDate(date, fmt) {
  
  // 将yyyy字符替换成年的4位数字
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));

  }
  // 2.获取
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  // 将传入的月日时分秒格式的字符替换成数字（都是2~1位的数字）
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? str : ('00' + str).substr(str.length));
    }
  }
  return fmt;
};