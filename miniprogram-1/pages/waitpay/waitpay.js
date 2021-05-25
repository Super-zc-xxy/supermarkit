// pages/waitpay/waitpay.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carlist:[{
      img: '../img/sp11.png',
      name: '小米蓝牙',
      typetext: '黑色',
      nowprice: '5999',
      oldprice: '6999',
      prtnum: '1',
      jianType: '',
      jiaType: '',
      checked: true,
      checkedd: '',
      sectType: '颜色',
      typelist: [[
        '黑色',
        '绿色',
        '白色'
      ],
      [
        '','','',
      ]
    ],
      typelock:0,
      state:'卖家已发货',


    },
    {
      img: '../img/sp12.png',
      name: '小米蓝牙123',
      typetext: '黑色-1',
      nowprice: '5999',
      oldprice: '',
      prtnum: '1',
      jianType: '',
      jiaType: '',
      checked: true,
      checkedd: '',
      sectType: '颜色',
      typelist: [[
        '黑色',
        '绿色',
        '白色'
      ],
      [
        '','','',
      ]
    ],
      typeliston: '',
      typelock:0,
      state:'待付款',
    },
    {
      img: '../img/sp13.png',
      name: '小米蓝牙',
      typetext: '黑色',
      nowprice: '5999',
      oldprice: '6999',
      prtnum: '1',
      jianType: '',
      jiaType: '',
      checked: true,
      checkedd: '',
      sectType: '颜色',
      typelist: [[
        '黑色',
        '绿色',
        '白色'
      ],
      [
        '','','',
      ]
    ],
      typeliston: '',
      typelock:0,
      state:'已收货',
    },
    {
      img: '../img/sp14.png',
      name: '小米蓝牙',
      typetext: '黑色',
      nowprice: '568',
      oldprice: '6999',
      prtnum: '1',
      jianType: '',
      jiaType: '',
      checked: true,
      checkedd: '',
      sectType: '颜色',
      typelist: [[
        '黑色',
        '绿色',
        '白色'
      ],
      [
        '','','',
        
      ]
    ],
      typeliston: '',
      typelock:0,
      state:'待付款',
    },
    {
      img: '../img/sp15.png',
      name: '小米蓝牙',
      typetext: '黑色',
      nowprice: '1999',
      oldprice: '',
      prtnum: '1',
      jianType: '',
      jiaType: '',
      checked: true,
      checkedd: '',
      sectType: '颜色',
      typelist: [[
        '黑色',
        '绿色',
        '白色'
      ],
      [
        '','','',
      ]
    ],
      typeliston: '',
      typelock:0,
      state:'卖家已发货',
    },
  ],
  outline:[
    '',
    '',
    '',
  ],
  tiscar:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    this.setData({
      carlist:app.data.minelist
    })
    var that = this;
    that.mid = option.mid;
    var tt = that.mid-0;
    switch(tt){
      case 1:
        this.waitpay();
        break;
      case 2:
        this.waitget();
        break;
      case 3:
        this.all();
        break;
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

  all(){
    this.data.carlist1 = this.data.carlist;
    for(let i = 0; i < this.data.outline.length;i++){
      this.data.outline[i] = ''
    }
    this.data.outline[0] = 'outline-on'
    this.setData({
      carlist1:this.data.carlist1,
      outline:this.data.outline
    })
  },
  waitpay(){
    for(let i = 0; i < this.data.outline.length;i++){
      this.data.outline[i] = ''
    }
    this.data.outline[1] = 'outline-on'
    var datalist = [];
    for(let i = 0; i < this.data.carlist.length; i++ ){
      if(this.data.carlist[i].paystate == '待付款'){
        datalist.push(this.data.carlist[i])
      }
    }
    this.setData({
      carlist1:datalist,
      outline:this.data.outline
    })
  },
  waitget(){
    var datalist = [];
    for(let i = 0; i < this.data.carlist.length; i++ ){
      if(this.data.carlist[i].paystate == '卖家已发货'){
        datalist.push(this.data.carlist[i])
      }
    }
    for(let i = 0; i < this.data.outline.length;i++){
      this.data.outline[i] = ''
    }
    this.data.outline[2] = 'outline-on'
    this.setData({
      carlist1:datalist,
      outline:this.data.outline
    })
  },
  back(){
    wx.navigateTo({
      url: '../mine/mine'
    })
    
  },
  
})
