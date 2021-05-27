// pages/alladd/alladd.js
const app = getApp();
const req = require('../../utils/dataReq')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 存放地址数据
    addinfo:[],
  },
  //默认地址
  moreaddres(e){
    let _this = this;
    let idx = e.currentTarget.dataset.index;
    req.req("userAddressDfault",function(res){
    },{
      token:app.data.token,
      id: _this.data.addinfo[idx].address_id
    })
  },
  //删除
  delet(e){
    let _this = this;
    let idx = e.currentTarget.dataset.idx;
    req.req("userAddressDelete",function(){
    },{
      token:app.data.token,
      id:_this.data.addinfo[idx].address_id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    let _this = this
    req.req("userAddressList",function(res){
      _this.setData({
        addinfo:res,
      })
    },{
      token:app.data.token
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

  }
})