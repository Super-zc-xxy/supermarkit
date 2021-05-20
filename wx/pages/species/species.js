// pages/species/species.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 定义一个假数据
    shop:[
      {title:'烟',type:'false',shoper:[{name:'大重九',img:'/static/swiper/sp1.png',produce:'抽九子，不拉嗓子',price:'100'},{name:'大重九',img:'/static/swiper/sp1.png',produce:'抽九子，不拉嗓子',price:'100'}]},
      {title:'酒',type:'false',shoper:[{name:'大重九',img:'/static/swiper/sp1.png'}]},
      {title:'水',type:'false',shoper:[{name:'大重九',img:'/static/swiper/sp1.png'}]},
      {title:'玩具',type:'false',shoper:[{name:'大重九',img:'/static/swiper/sp1.png'}]},
      {title:'零食',type:'false',shoper:[{name:'大重九',img:'/static/swiper/sp1.png'}]},
      {title:'生活用品',type:'false',shoper:[{name:'大重九',img:'/static/swiper/sp1.png'}]},
    ],
    shoper:[],
  },
  //获取左侧商品类
  shoper(e){
    this.data.shoper = [];
    let idx = e.currentTarget.dataset.index;
    let a = this.data.shoper.concat(this.data.shop[idx].shoper);
    this.setData({
      shoper:a
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      shoper:this.data.shop[0].shoper
    })
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