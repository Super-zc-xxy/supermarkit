// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lastid:'',
    shopswiperindex:1,
    shopnum:1,
    shop:
      {
        shopswiper:[{img1:'/static/swiper/sp1.png',id:'1'},{img1:'/static/swiper/sp5.png',id:'2'},{img1:'/static/swiper/sp2.png',id:'3'},{img1:'/static/swiper/sp3.png',id:'4'},{img1:'/static/swiper/sp4.png',id:'5'}],
        shopprice:"9.99",
        shopname:'小米巨能写中性笔10枝装',
        shopproduce:[{img1:'icon-1',p:'4倍书写长度'},{img1:'icon-icon-test',p:'日本MLKUNI油墨'},{img1:'icon-3',p:'0.5mm弹簧子弹头'}],
        shopbuystate:false,
        shopinfo:[{shopname:'小米巨能写黑色中性笔10枝装',shopprice:"￥9.99",shopimg:'/static/swiper/sp1.png'}],
        shopnum:1,
        shopaddresstate:false,
        shopaddress:true,
    }
  },
  // 返回上一个页面
  back(){
    wx.navigateBack({
      delta: 1,
    })
  },
  // 购买弹框
  buy(){
    this.data.shop.shopbuystate = true;
    this.setData({
      shop:this.data.shop
    })
  },
  //地址弹框
  addres(){
    this.data.shop.shopaddresstate = true;
    this.setData({
      shopaddres:this.data.shop
    })
  },
  //地址返回
  addres_back(){
    this.data.shop.shopaddresstate = false;
    this.setData({
      shopaddres:this.data.shop.shopaddresstate
    })
  },
  //地址跳转
  addnewaddress(){
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  //返回首页
  home(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  //商品数量减少
  reduce(){
    if(this.data.shop.shopnum == 1){
      wx.showToast({
        title: '别减了铁汁们',
        icon:'none'
      })
      return ;
    }
    this.data.shop.shopnum -=  1;
    this.setData({
      shopnum:this.data.shop.shopnum
    })
  },
  //商品数量增加
  add(){
    this.data.shop.shopnum += 1;
    this.setData({
      shopnum:this.data.shop.shopnum
    })
  },
  //弹窗返回
  body_back(){
    this.data.shop.shopbuystate = false;
    this.setData({
      shop:this.data.shop
    })
  },
  // 轮播页码变化
  onchange(e){
    this.setData({
      shopswiperindex:e.detail.current +1 
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var faddish =   options.faddish;
    this.setData({
      faddish:faddish,
    })
    // console.log(JSON.parse(faddish));
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})