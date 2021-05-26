// 设置监听
function setWatch(page){
  let data  = page.data;
  let watch = page.watch;
  for(let i in watch){
    let key = i.split('.');
    let nowData = data;
    let lastKey = key[key.length-1];
    let watchFun = watch[i].handler || watch[i].function;
    let deep = watch[i].deep;
    observe(nowData,lastKey,watchFun,deep,page)
  }
}
function observe(obj,key,watchFun,deep,page){
  let val = obj[key];
  if(deep && val != null && typeof val === 'object'){
    for(let i in val){
      this.observe(val,i,watchFun,deep,page);
    }
  }
  let that = this;
  Object.defineProperty(obj,key,{
    configurable: true,
    enumerable: true,
    // value: key,
    // writable: true,
    set: function(value){
      if(val != value){
        watchFun.call(page,value,val);
      }
      val = value;
      if(deep){
        that.observe(obj,key,watchFun,deep,page);
      }
    },
    get: function(){
      return val;
    }
  })
}

module .exports = {
  setWatch: setWatch
}