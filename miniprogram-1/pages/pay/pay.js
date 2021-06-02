// pages/pay/pay.js
const app = getApp();
const req = require('../../utils/dataReq');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nums: '',
    AllPrice: '',
    carlist: '',
    payjdg:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var datalist = JSON.parse(options.list)
    this.setData({
      carlist: datalist
    })
    this.start(datalist);


    console.log(datalist);
    
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
    this.setData({
      payjdg:app.data.payjdg
    })
    req.req("userAddressList", function (res) {
    }, {
      token: app.data.token
    })
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

  },
  start() {
    var nums = 0;
    var price = 0;
    for (let i = 0; i < this.data.carlist.length; i++) {
      nums += this.data.carlist[i].prtnum - 0;
      price += (this.data.carlist[i].nowprice - 0) * (this.data.carlist[i].prtnum - 0);
    }
    this.setData({
      nums: nums,
      AllPrice: price
    })
  },
  topay(){
    var shopping_car_ids = [];
    var money = '';
    for (let i = 0; i < this.data.carlist.length; i++) {
      for (let j = 0; j < app.data.shopcar_r.length; j++) {
        if (app.data.shopcar_r[j].good_id == this.data.carlist[i].id) {
          shopping_car_ids.push(app.data.shopcar_r[j].shopping_car_id)
        }
      }
    }
    // 生成订单
    console.log(app.data.shopcar_r,222);
    console.log(this.data.carlist,132123);
    req.req('generateOrder',function(res){
        wx.requestPayment({
          nonceStr: res.nonce_str,
          package: `prepay_id=${res.prepay_id}`,
          paySign: res.paySign,
          timeStamp: res.timeStamp,
          signType:'MD5'
        })
    },{
      token:app.data.token,
      address_id:String(app.data.address_id),
      money: String(this.data.AllPrice),
      shopping_car_ids: shopping_car_ids
    }, 'post')
  }
})