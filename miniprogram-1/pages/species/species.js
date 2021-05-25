// pages/species/species.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shop:[],
    shoper: [],
    itemcc: 1,
    showshop: 0,
  },
  //获取左侧商品类
  shoper(e) {
    
    let idx = e.currentTarget.dataset.index;
    let showlist = this.data.shop[idx]
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
    for(let i = 0; i < this.data.shop.length; i++){
      this.data.shop[i].r_outline_on =''
    }
    this.data.shop[idx].r_outline_on ='showon'
    this.setData({
      shop:this.data.shop,
      shoper: showlist,
      showshop:idx

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
    this.setData({
      shop:app.data.shoparray
    })
    for(let i = 0; i < this.data.shop.length; i++){
      this.data.shop[i].r_outline_on =''
    }
    this.setData({
      showshop:app.data.speciesindex
    })
    let showlist = this.data.shop[this.data.showshop]
    this.data.shop[this.data.showshop].r_outline_on ='showon'
    this.setData({
      shop:this.data.shop,
      shoper: showlist,
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
  thisitem(e) {
    var idx = e.currentTarget.dataset.faddish
    wx.navigateTo({
      url: '../shop/shop',
    })
    app.xq_item = this.data.shop[this.data.showshop].shoplist[idx]
  },
})