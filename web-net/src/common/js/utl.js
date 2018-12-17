function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function shuffle (arr) {
  let _arr = arr.slice(0)
  for (let i = 0; i < arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }

  return _arr
}

// 截流函数
export function debounce (func, delay) {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null)
    return(r[2])
  return ''
}

export function loadScript({url, id, onload, type,onerror}){
  //debugger
  var scriptEle = document.createElement("script");
  scriptEle.type = type || "text/javascript";
  //scriptEle.setAttribute('crossorigin', "anonymous")
  id && (scriptEle.id = id)
  onload && (scriptEle.onload= onload)
  scriptEle.src = url;
  onerror && (scriptEle.onerror= onerror)
  // scriptEle.onerror = function (){
  //   console.log('eroor')
  // }
  document.getElementsByTagName("head")[0].appendChild(scriptEle)

}

export let Num = {
  add (a, b) {//相加
    var c, d, e
    try {
      c = a.toString().split('.')[1].length
    } catch (f) {
      c = 0
    }
    try {
      d = b.toString().split('.')[1].length
    } catch (f) {
      d = 0
    }
    return e = Math.pow(10, Math.max(c, d)), (this.mul(a, e) + this.mul(b, e)) / e
  },
  sub (a, b) {//相减
    var c, d, e
    try {
      c = a.toString().split('.')[1].length
    } catch (f) {
      c = 0
    }
    try {
      d = b.toString().split('.')[1].length
    } catch (f) {
      d = 0
    }
    return e = Math.pow(10, Math.max(c, d)), (this.mul(a, e) - this.mul(b, e)) / e
  },
  mul (a, b) {//主体
    var c = 0,
      d = a.toString(),
      e = b.toString()
    try {
      c += d.split('.')[1].length
    } catch (f) {
    }
    try {
      c += e.split('.')[1].length
    } catch (f) {
    }
    return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c)
  },
  div (a, b) {//除
    var c, d, e = 0,
      f = 0
    try {
      e = a.toString().split('.')[1].length
    } catch (g) {
    }
    try {
      f = b.toString().split('.')[1].length
    } catch (g) {
    }
    return c = Number(a.toString().replace('.', '')), d = Number(b.toString().replace('.', '')), this.mul(c / d, Math.pow(10, f - e))
  }
}


export  function  dateToString(date){
  var year = date.getFullYear();
  var month =(date.getMonth() + 1).toString();
  var day = (date.getDate()).toString();
  if (month.length == 1) {
    month = "0" + month;
  }
  if (day.length == 1) {
    day = "0" + day;
  }
  var dateTime = year + "-" + month + "-" + day;
  return dateTime;
}



let u = navigator.userAgent

export var versions = {
  ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
  android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
  wechat: !!u.match(/MicroMessenger/i)
}


