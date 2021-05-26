// pages/shop/shop.js
const app = getApp();
const req = require('../../utils/dataReq')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lastid: '',
    shopswiperindex: 1,
    shopnum: 1,
    itemArray: '',
    shopbuystate: '',
    shopcarnum: '',
    shopuser:[],
    addressstate:false,
    shopaddress:false,
    // 选中
    icon:'icon-icon-test1',
    user:[
      {
        phone:'17398893373',//电话
        procince:'4434',//省编号
        city:'4434',//城市编号
        area:'4434',//区县编号
        name:'张超',//收货人名称
        etailed:'阿巴',//详细地址
      },
    ]
  },
  // 返回上一个页面
  back() {
    wx.navigateBack({
      delta: 1,
    })
  },
  // 购买弹框
  buy() {
    this.setData({
      shopbuystate: true
    })
  },
  toshopcar() {
    wx.switchTab({
      url: '/pages/shopingcar/shopingcar',
    })
  },
  //地址弹框
  addres() {
    if(app.data.addressinfo.length !=0){
      this.setData({
        shopaddress:false
      })
    }
    this.setData({
      addressstate:true,
    })
  },
  //地址返回
  addres_back() {
    this.data.addressstate = false;
    this.setData({
      addressstate: this.data.addressstate
    })
  },
  //地址跳转
  addnewaddress() {
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  //返回首页
  home() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  //商品数量减少
  reduce() {
    if (this.data.itemArray.prtnum == 1) {
      wx.showToast({
        title: '别减了铁汁',
        icon: 'none'
      })
      return;
    } else {
      this.data.itemArray.prtnum -= 1;
      this.setData({
        itemArray: this.data.itemArray
      })
    }

  },
  //商品数量增加
  add() {
    if (this.data.itemArray.prtnum >= 10) {
      wx.showToast({
        title: '别加了铁汁',
        icon: 'none'
      })
      return;
    } else {
      this.data.itemArray.prtnum++;
      this.setData({
        itemArray: this.data.itemArray
      })
    }
  },
  //弹窗返回
  body_back() {
    this.setData({
      shopbuystate: false
    })
  },
  // 轮播页码变化
  onchange(e) {
    this.setData({
      shopswiperindex: e.detail.current + 1
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
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let _that = this;
    req.req("userAddressList",function(res){
      _that.setData({
        user :  res
      })
      console.log(_that.data.user);
    },{
      token:app.data.token
    })
    setTimeout(() => {
      this.setData({
        itemArray: app.xq_item
      })
      var jdge = false;
      for (let i = 0; i < app.data.shopcarlist.length; i++) {
        if (this.data.itemArray.id == app.data.shopcarlist[i].id) {
          this.setData({
            shopcarnum: app.data.shopcarlist[i].prtnum,
          })
          jdge = true;
          break;
        }
      }
    }, 500);
    var xq_list = []
    var xq_list1 = []
    var xq_list2 = []
    var _this = this;
    req.req('goodInfo', function (res) {
      console.log(res);
      var test = JSON.parse(JSON.parse(res.info[0].edition));
      for (let i = 0; i < test.length; i++) {
        var testArray = {};
        testArray.typename = test[i].label;
        testArray.typetext = test[i].value.split('，')[0];
        testArray.typetextArray = test[i].value.split('，');
        xq_list.push(testArray)
      }
      for (let i = 0; i < JSON.parse(JSON.parse(res.info[0].imgs)).length; i++) {
        xq_list1.push(JSON.parse(JSON.parse(res.info[0].imgs))[i])
      }
      xq_list2 = JSON.parse(JSON.parse(res.info[0].info))[0].split('，')
      app.xq_item.produce = xq_list2[0]
      app.xq_item.imgArray = xq_list1
      app.xq_item.intrArray = xq_list2
      app.xq_item.typeArray = xq_list
      _this.setData({
        itemArray:_this.data.itemArray
      })
    }, {
      good_id: app.xq_item.id,
      size: 10000
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
  addshopcar() {
    // app.data.shopcarlist
    var shopcaritem ={};
    shopcaritem.token = app.data.token;
    shopcaritem.good_id = this.data.itemArray.id;
    shopcaritem.num = this.data.itemArray.prtnum;
    shopcaritem.price = this.data.itemArray.nowprice-0;
    shopcaritem.money = (this.data.itemArray.nowprice)*(this.data.itemArray.prtnum);
    shopcaritem.sku = JSON.stringify(this.data.itemArray.typeArray);
    
    var jdge = false;
    for (let i = 0; i < app.data.shopcarlist.length; i++) {
      if (this.data.itemArray.id == app.data.shopcarlist[i].id) {
        this.setData({
          tiscar: 'tis-shopcar-1'
        })
        setTimeout(() => {
          this.setData({
            tiscar: ''
          })
        }, 1000);
        jdge = true;
        break;
      }
    }
    if (jdge == false) {
      app.data.shopcarlist.push(this.data.itemArray)
      this.setData({
        shopcarnum: this.data.itemArray.prtnum,
      })
    }
    this.setData({
      shopbuystate: false
    })
    console.log(shopcaritem);
    req.req('shoppingCarAddModify', function (res) {
      console.log(res);
    }, shopcaritem)
  },
  buynow() {
    var sendlist = [];
    sendlist.push(this.data.itemArray)
    wx.navigateTo({
      url: `../pay/pay?mid=3&list=${JSON.stringify(sendlist)}`
    })
    this.setData({
      shopbuystate: false
    })
  },
  type_change(e){
    var idx = e.currentTarget.dataset.index;
    var idx1 = e.currentTarget.dataset.index1;
    this.data.itemArray.typeArray[idx1].typetext = this.data.itemArray.typeArray[idx1].typetextArray[idx]
    this.setData({
      itemArray:this.data.itemArray
    })
  },
})