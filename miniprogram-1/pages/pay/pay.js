// pages/pay/pay.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nums:'',
    AllPrice:'',
    carlist:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var datalist = JSON.parse(options.list)
    console.log(datalist);
    this.setData({
      carlist:datalist
    })
    this.start();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.setData({
    //   carlist:app.data.s
    // })
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

  },
  start(){
    var nums = 0;
    var price = 0;
    for(let i = 0; i < this.data.carlist.length; i++){
      nums += this.data.carlist[i].prtnum-0;
      price += (this.data.carlist[i].nowprice-0)*(this.data.carlist[i].prtnum-0);      
    }
    this.setData({
      nums:nums,
      AllPrice:price
    })
  },
})