// pages/mine/mine.js
const app = getApp();
const req = require('../../utils/dataReq')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    token: '',
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    login:'',
    name:'',
    icon:'',
  },

  //地址跳转
  addres(){
    wx.navigateTo({
      url: '../alladd/alladd',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      token: app.data.token,
      login: app.data.login,
      name: app.data.name,
      icon: app.data.icon,
    })
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
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

  },
  waitpay() {
    wx.navigateTo({
      url: '../waitpay/waitpay?mid=1'
    })
  },
  waitget() {
    wx.navigateTo({
      url: '../waitpay/waitpay?mid=2'
    })
  },
  waitall() {
    wx.navigateTo({
      url: '../waitpay/waitpay?mid=3'
    })
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
        app.data.nickname = res.userInfo.nickName;
        app.data.icon = res.userInfo.avatarUrl;
        req.req('register', function (res) {
        }, {
          icon: app.data.icon,
          openid: app.data.open_id,
          nick_name: app.data.nickname
        })

      }

    })


  },


})