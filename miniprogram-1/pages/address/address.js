// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isChecked2: false,
    username: "",
    phone: '',
    chooseAddress: '',
    moreaddress: '',
    addressstate: false,
    userinfo: []
  },
  //返回上一级
  back() {
    wx.navigateBack({
      delta: 1,
    })
  },
  //地址选取
  onChangeAddress() {
    var _page = this;
    wx.chooseLocation({
      success: function (res) {
        _page.setData({
          chooseAddress: res.address
        });
      },
      fail: function (err) {
        console.log(err)
      }
    });
  },
  //默认地址
  changeSwitch2(e) {
    this.setData({})
    this.data.addressstate = e.detail.value;
    //  console.log(e.detail.value);
  },
    //保存用户信息
     add() {
      let state = false;
      if (this.data.userinfo != "" || this.data.phone != "" || this.data.phone != "" || this.data.chooseAddress != "" || this.data.moreaddress != "") {
        this.data.userinfo.push({
          username: this.data.username,
          phone: this.data.phone,
          chooseAddress: this.data.chooseAddress,
          moreaddress: this.data.moreaddress,
          addressstate: this.data.addressstate
        })
        console.log(this.data.userinfo);
        state = true;
      }else{
       wx.showModal({
         title:'温馨提示',
         content:'请填写完整信息',
       })
      }
      if(state == true){
        wx.navigateBack({
          delta: 1,
        })
      }
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
})