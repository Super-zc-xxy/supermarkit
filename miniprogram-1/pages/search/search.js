// pages/search/search.js
// 请求页面数据
const app = getApp();
// 请求接口方法
const req = require('../../utils/dataReq')
// 
const watch = require('../../utils/watch')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 输入框信息
    input: '',
    // 存放匹配出来的数据
    searchinfo: [],
  },
  // 搜索按钮
  search(e) {
    console.log(this.data.searchinfo);
  },
  // 搜索值
  serachvalue(e) {
    let _that = this;
    this.setData({
      input: e.detail.value
    });
    if (_that.data.input != "") {
      req.req("goodList", function (res) {
        _that.setData({
          searchinfo: res
        })
      }, {
        page: 1,
        size: 1000,
        search:this.data.input
      })
    }
  },
    //调用新品好物 
    xp(e) {
      var idx = e.currentTarget.dataset.index
         wx.navigateTo({
        url: '../shop/shop',
      })
      for(let i=0;i<app.data.all_list.length;i++){
        if(app.data.all_list[i].id == this.data.searchinfo.data[idx].good_id){
          app.xq_item = app.data.all_list[i]
        }
      }
    },
  // 监听输入值发生变化
  watch: {
    'input': {
      function (val) {
        let _that = this;
        console.log(val)
        if (val != "") {
          req.req("goodList", function (res) {
            _that.setData({
              searchinfo: res
            })
            // console.log(_that.data.searchinfo);
          }, {
            page: 1,
            size: 1000,
            search: val
          })
        }
        if(val == ""){
          _that.setData({
            searchinfo: []
          })
        }
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    watch.setWatch(this)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

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