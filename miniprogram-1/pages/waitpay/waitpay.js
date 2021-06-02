// pages/waitpay/waitpay.js
const req = require('../../utils/dataReq')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fromList: '',
    outline: [
      '',
      '',
      '',
    ],
    tiscar: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var that = this;
    that.mid = option.mid;
    var tt = that.mid - 0;
    this.setData({
      tt: tt
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
    var _this = this;
    req.req('orderList', function (res) {
      app.data.fromList = res;
      for (let i = 0; i < app.data.fromList.data.length; i++) {
        switch (app.data.fromList.data[i].status) {
          case 1:
            app.data.fromList.data[i].paystate = '待付款';
            break;
          case 2:
            app.data.fromList.data[i].paystate = '完成支付';
            break;
          case 3:
            app.data.fromList.data[i].paystate = '未发货';
            break;
          case 4:
            app.data.fromList.data[i].paystate = '已发货';
            break;
          case 5:
            app.data.fromList.data[i].paystate = '已收货';
            break;
          case 6:
            app.data.fromList.data[i].paystate = '退款';
            break;
          case 7:
            app.data.fromList.data[i].paystate = '取消';
            break;
        }
        // var nowtime = _this.timestampToTime();
        app.data.fromList.data[i].nowtime = _this.timestampToTime(app.data.fromList.data[i].create_time)
      }
      _this.setData({
        fromList: app.data.fromList.data
      })
      switch (_this.data.tt) {
        case 1:
          _this.waitpay();
          break;
        case 2:
          _this.waitget();
          break;
        case 3:
          _this.all();
          break;
      }
    }, {
      token: app.data.token,
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

  all() {
    this.data.fromList = this.data.fromList;
    for (let i = 0; i < this.data.outline.length; i++) {
      this.data.outline[i] = ''
    }
    this.data.outline[0] = 'outline-on'
    this.setData({
      fromList: app.data.fromList.data,
      outline: this.data.outline
    })
  },
  waitpay() {
    for (let i = 0; i < this.data.outline.length; i++) {
      this.data.outline[i] = ''
    }
    this.data.outline[1] = 'outline-on'
    var datalist = [];
    for (let i = 0; i < this.data.fromList.length; i++) {
      if (this.data.fromList[i].paystate == '待付款') {
        datalist.push(this.data.fromList[i])
      }
    }
    this.setData({
      fromList: datalist,
      outline: this.data.outline
    })
  },
  // waitget() {
  //   var datalist = [];
  //   for (let i = 0; i < this.data.fromList.length; i++) {
  //     if (this.data.fromList[i].paystate == '卖家已发货') {
  //       datalist.push(this.data.fromList[i])
  //     }
  //   }
  //   for (let i = 0; i < this.data.outline.length; i++) {
  //     this.data.outline[i] = ''
  //   }
  //   this.data.outline[2] = 'outline-on'
  //   this.setData({
  //     fromList: datalist,
  //     outline: this.data.outline
  //   })
  // },
  back() {
    wx.navigateTo({
      url: '../mine/mine'
    })

  },
  payonce(e) {
    var _this = this;
    var idx = e.currentTarget.dataset.index
    if (this.data.fromList[idx].status == 1) {
      app.data.payjdg = true
    } else {
      app.data.payjdg = false
    }
    console.log(this.data.fromList);
    var xp_shop = [];
    for(let i  = 0; i < this.data.fromList[idx].childern.length; i++){
      var pushitem = {};
      pushitem.prtnum = this.data.fromList[idx].childern[i].num;
      pushitem.titlename = this.data.fromList[idx].childern[i].good_name;
      pushitem.nowprice = this.data.fromList[idx].childern[i].price;
      pushitem.prtnum = this.data.fromList[idx].childern[i].num
      pushitem.img1 = this.data.fromList[idx].childern[i].img
      xp_shop.push(pushitem)
    }
    wx.navigateTo({
      url: `../pay/pay?mid=9&list=${JSON.stringify(xp_shop)}`
    })
  },
  timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y + M + D + h + m + s;
  }

})