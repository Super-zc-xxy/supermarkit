// pages/index/index.js
const app = getApp();
const req = require('../../utils/dataReq')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baozhang: [{
        img1: 'icon-shangpin',
        p: '正品商品'
      },
      {
        img1: 'icon-approve',
        p: '官方认证'
      },
      {
        img1: 'icon-manjianyouhui',
        p: '满减优惠'
      },
    ],
    shop: [{
        img1: 'icon-yancao',
        p: '烟',
        id: '0'
      },
      {
        img1: 'icon-jiu_',
        p: '酒',
        id: '1'
      },
      {
        img1: 'icon-wanju',
        p: '玩具',
        id: '2'
      },
      {
        img1: 'icon-water',
        p: '水',
        id: '3'
      },
      {
        img1: 'icon-lingshi',
        p: '零食',
        id: '4'
      },
      {
        img1: 'icon-shenghuoyongpin',
        p: '生活用品',
        id: '5'
      },
    ],
    all: [],
    current: 0,
    shoplist: [],
    xp_shoplist: [],
    bk_shoplist: [],
    fixedinput: '',
    over_nav: '',
    xp_item: '',
    lunbo_item: '',

    // userInfo: {},
    // hasUserInfo: false,
    // canIUseGetUserProfile: false,
    open_id: '',
    code: '',
  },

  topbar: function (e) {
    var id = e.currentTarget.dataset.id;
    for (let i = 0; i < this.data.all.length; i++) {
      this.data.all[i].r_outline_on = ''
    }
    this.data.all[id].r_outline_on = 'r-outline-on'
    this.setData({
      current: id,
      all: this.data.all
    })
  },
  //封装跳转函数
  faddish(e, _array) {
    var faddish = e.currentTarget.dataset.faddish - 0;
    wx.navigateTo({
      url: `../shop/shop?faddish=${JSON.stringify(_array[faddish])}`
    })
  },
  //调用函数
  xiangqin(e) {
    var idx = e.currentTarget.dataset.faddish
    wx.navigateTo({
      url: '../shop/shop',
    })
    app.xq_item = this.data.lunbo_item[idx]
  },
  //调用爆款详情
  bk(e) {
    var idx = e.currentTarget.dataset.faddish
    wx.navigateTo({
      url: '../shop/shop',
    })
    app.xq_item = this.data.bk_shoplist[idx]
  },
  //调用新品好物 
  xp(e) {
    var idx = e.currentTarget.dataset.faddish
    wx.navigateTo({
      url: '../shop/shop',
    })
    app.xq_item = this.data.xp_shoplist[idx]
  },
  //搜索跳转
  search() {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var shoparray = [{
        title: '烟',
        r_outline_on: 'r-outline-on', //判断是否选中
        p: '吞云吐雾',
        id: '1', //商品种类编号
        shoplist: []
      },
      {
        title: '酒',
        r_outline_on: '', //判断是否选中
        p: '醉生梦死',
        id: '2', //商品种类编号
        shoplist: []
      },
      {
        title: '玩具',
        r_outline_on: '', //判断是否选中
        p: '懵懂童趣',
        id: '3', //商品种类编号
        shoplist: []
      },
      {
        title: '水',
        r_outline_on: '', //判断是否选中
        p: '生命之水',
        id: '4', //商品种类编号
        shoplist: []
      },
      {
        title: '零食',
        r_outline_on: '', //判断是否选中
        p: '闲暇神器',
        id: '5', //商品种类编号
        shoplist: []
      },
      {
        title: '生活用品',
        r_outline_on: '', //判断是否选中
        p: '小康社会',
        id: '6', //商品种类编号
        shoplist: []
      },
    ]
    var newlist = [];
    var list = []
    var _this = this;
    var bk_list = [];
    var lunbo_item = [];
    req.req('goodList', function (res) {
      var alllist = []; //原数据
      
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].good_name.indexOf('zc') != -1) {
          alllist.push(res.data[i])
        }
      }
      for (let i = 0; i < alllist.length; i++) {
        var newlist_item = {};
        newlist_item.titlename = alllist[i].good_name;
        newlist_item.id = alllist[i].good_id;
        if (alllist[i].is_new - 0 == 1) {
          newlist_item.typestate = '爆款';
        } else {
          newlist_item.typestate = '';
        }
        switch (alllist[i].type_id) {
          case 1610:
            newlist_item.state = '酒';
            break;
          case 1609:
            newlist_item.state = '烟';
            break;
          case 1613:
            newlist_item.state = '零食';
            break;
          case 1612:
            newlist_item.state = '玩具';
            break;
          case 1611:
            newlist_item.state = '水';
            break;
          case 1614:
            newlist_item.state = '生活用品';
            break;
        }
        switch (alllist[i].status) {
          case 1:
            newlist_item.paystate = '待付款';
            break;
          case 2:
            newlist_item.paystate = '完成支付';
            break;
          case 3:
            newlist_item.paystate = '未发货';
            break;
          case 4:
            newlist_item.paystate = '已发货';
            break;
          case 5:
            newlist_item.paystate = '已收货';
            break;
          case 6:
            newlist_item.paystate = '退款';
            break;
          case 7:
            newlist_item.paystate = '取消';
            break;
        }
        newlist_item.img1 = alllist[i].img;
        newlist_item.nowprice = alllist[i].price;
        newlist_item.oldprice = alllist[i].oldprice;
        // 原数据内容直接添加
        newlist_item.typeliston = '';
        newlist_item.typelock = 0;
        newlist_item.jianType = '';
        newlist_item.jiaType = '';
        newlist_item.checked = false;
        newlist_item.checkedd = '';
        newlist_item.prtnum = 1;
        newlist.push(newlist_item)
      }
      for (let i = 0; i < newlist.length; i++) {
        switch (newlist[i].state) {
          case '烟':
            shoparray[0].shoplist.push(newlist[i])
            break;
          case '酒':
            shoparray[1].shoplist.push(newlist[i])
            break;
          case '玩具':
            shoparray[2].shoplist.push(newlist[i])
            break;
          case '水':
            shoparray[3].shoplist.push(newlist[i])
            break;
          case '零食':
            shoparray[4].shoplist.push(newlist[i])
            break;
          case '生活用品':
            shoparray[5].shoplist.push(newlist[i])
            break;
        }
      }
      for (let i = 0; i < 6; i++) {
        list.push(newlist[i])
      }
      for (let i = 0; i < newlist.length; i++) {
        if (newlist[i].typestate == '爆款') {
          bk_list.push(newlist[i])
        }
      }
      for (let i = 0; i < newlist.length; i++) {
        if (newlist[i].typestate == '爆款') {
          lunbo_item.push(newlist[i])
        }
      }
      app.data.shoparray = shoparray;
      app.data.all_list = newlist;
      _this.setData({
        xp_shoplist: list,
        bk_shoplist: bk_list,
        lunbo_item: lunbo_item,
        all: app.data.shoparray
      })
    }, {
      page: 1,
      size: 10000
    })
    this.login_1();

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
  onPageScroll: function (e) {
    if (e.scrollTop > 50) {
      this.setData({
        fixedinput: 'fixedinput',
      })
    } else {
      this.setData({
        fixedinput: '',
      })
    }
    if (e.scrollTop > 1250) {
      this.setData({
        over_nav: 'r-textbox-outbox-2',
      })
    } else {
      this.setData({
        over_nav: '',
      })
    }
  },
  tospecies(e) {
    var idx = e.currentTarget.dataset.index - 0
    app.data.speciesindex = idx;
    wx.switchTab({
      url: `../species/species`,
    })

  },
  show(e) {
    var idx = e.currentTarget.dataset.faddish
    wx.navigateTo({
      url: '../shop/shop',
    })
    app.xq_item = this.data.all[this.data.current].shoplist[idx]
  },
  login_1() {
    var _this = this;
    wx.login({
      success(res) {
        app.data.code = res.code;
        req.req('codeExchangeOpenid', function (res) {
          app.data.open_id = res.openid;
          if (res.info != undefined) {
            app.data.token = res.info.token;
            app.data.name = res.info.nick_name;
            app.data.icon = res.info.icon;
            app.data.login = true;
            console.log(app.data.token);
            req.req('shoppingCarList', function (res) {
              console.log(res.data);
              var shopcarlist = []
              for (let i = 0; i < res.data.length; i++) {
                for(let j = 0; j < app.data.all_list.length; j++){
                  if(app.data.all_list[j].id == res.data[i].good_id){

                    shopcarlist.push(app.data.all_list[j])
                  }
                }
              }
              app.data.shopcarlist = shopcarlist
              console.log(app.data.all_list);
            }, {
              token: app.data.token
            })
            // req.req('orderList', function (res) {
            //   console.log(res);
            // }, {
            //   token: app.data.token
            // })
          } else {
            console.log('未注册');
          }
        }, {
          code: res.code
        })

      }

    })
  }

})