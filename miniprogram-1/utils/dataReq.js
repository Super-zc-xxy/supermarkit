/**
 * 请求封装(仅仅是数据请求)
 * @param {*} url 接口地址,string类型
 * @param {*} fun 请求结束执行的function
 * @param {*} data 请求的参数,object类型
 * @param {*} method 请求方式
 */
function req(url,fun,data,method){
  if(!method){
    method = 'GET'
  }
  wx.request({
    url: 'http://api_devs.wanxikeji.cn/api/'+url,
    timeout: 30000,
    data:data,
    method: method,
    success: (result) => {
      fun(result.data.data)
    },
    fail: (res) => {
      console.log("请求出错"+res)
    },
    complete: (res) => {},
  })
}

module .exports = {
  req: req
}