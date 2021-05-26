// pages/shopingcar/shopingcar.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carlist:'',
    shadowtis: '',
    bianji: '编辑',
    judge: false,
    allprice: 0,
    allnum: 0,
    allcheck: '',
    allcheckjudeg: false,
    delbox: false,
    typeshadow: false,
    typeprice: '',
    typename: '',
    sectType: '',
    carindex: '',
    xpshopx:'',
    indexs:0,
    token:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.allcheck()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.atbegin(false, 'checked');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      carlist:app.data.shopcarlist,
      token:app.data.token,
    })
    this.atbegin(false, 'checked');
    this.allNums();

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
  jiancolor(val, idx) {
    if (val == 1) {
      this.data.carlist[idx].jianType = 'jianType'
    } else {
      this.data.carlist[idx].jianType = ''
    }
    if (val == 10) {
      this.data.carlist[idx].jiaType = 'jianType'
    } else {
      this.data.carlist[idx].jiaType = ''
    }
    var jianType = "carlist[" + idx + "].jianType"
    var jiaType = "carlist[" + idx + "].jiaType"
    this.setData({
      [jianType]: this.data.carlist[idx].jianType,
      [jiaType]: this.data.carlist[idx].jiaType,
    })
  },
  jian(e) {
    var idx = e.target.dataset.index;
    if (this.data.carlist[idx].prtnum > 1) {
      this.data.carlist[idx].prtnum--
      var prtnums = "carlist[" + idx + "].prtnum"
      this.setData({
        [prtnums]: this.data.carlist[idx].prtnum
      })
      this.jiancolor(this.data.carlist[idx].prtnum, idx);
    }
    this.allNums();
  },
  jia(e) {
    var idx = e.target.dataset.index;
    if (this.data.carlist[idx].prtnum < 10) {
      this.data.carlist[idx].prtnum++
      var prtnums = "carlist[" + idx + "].prtnum"
      this.setData({
        [prtnums]: this.data.carlist[idx].prtnum
      })
      this.jiancolor(this.data.carlist[idx].prtnum, idx);
    } else {
      this.shadowtis = 'shadowtis'
      setTimeout(() => {
        this.shadowtis = ''
        this.setData({
          shadowtis: this.shadowtis
        })
      }, 2000);
      this.setData({
        shadowtis: this.shadowtis
      })
    }
    this.allNums();
  },
  numchange(e) {
    var idx = e.target.dataset.index;
    if (e.detail.value > 10) {
      e.detail.value = 10
    } else if (e.detail.value < 1) {
      e.detail.value = 1
    } else if (e.detail.value > 1) {} else {
      e.detail.value = 1
    }
    this.jiancolor(this.data.carlist[idx].prtnum, idx);
    var prtnums = "carlist[" + idx + "].prtnum"
    this.setData({
      [prtnums]: e.detail.value
    })
    this.allNums();
  },
  start() {
    for (let i = 0; i < this.data.carlist.length; i++) {
      this.jiancolor(this.data.carlist[i].prtnum, i);
    }
  },
  bianjis() {
    if (this.bianji == '完成') {
      this.bianji = "编辑"
      this.atbegin(false, 'checked');
    } else {
      this.bianji = "完成"
      this.atbegin(true, '');
    }
    this.judge = !this.judge
    this.setData({
      bianji: this.bianji,
      judge: this.judge
    })
    this.allcheckdd();
    this.allNums();
  },
  checkbox(e) {
    let idx = e.currentTarget.dataset.index;
    if (this.data.carlist[idx].checked == false) {
      this.data.carlist[idx].checkedd = ''
    } else {
      this.data.carlist[idx].checkedd = 'checked'
    }
    this.data.carlist[idx].checked = !this.data.carlist[idx].checked
    var checkedd = "carlist[" + idx + "].checkedd"
    this.setData({
      [checkedd]: this.data.carlist[idx].checkedd
    })
    this.allNums();
  },
  allNums() {
    var numadd = 0;
    var priceadd = 0;
    for (let i = 0; i < this.data.carlist.length; i++) {
      if (this.data.carlist[i].checked == false) {
        numadd += this.data.carlist[i].prtnum - 0;
        priceadd += (this.data.carlist[i].prtnum - 0) * (this.data.carlist[i].nowprice - 0)
      }
    }

    this.setData({
      allprice: priceadd,
      allnum: numadd
    })
  },
  //全选效果
  allcheck() {
    this.data.allcheckjudeg = !this.data.allcheckjudeg;
    if (this.data.allcheckjudeg == true) {
      this.data.allcheck = 'checked'
      this.atbegin(false, 'checked');
    } else {
      this.data.allcheck = ''
      this.atbegin(true, '');
    }
    this.setData({
      allcheck: this.data.allcheck
    })
    this.allNums();
    
  },
  // 判断是否全选
  allcheckdd() {
    var tlength = 0;
    for (let i = 0; i < this.data.carlist.length; i++) {
      if (this.data.carlist[i].checked == false) {
        tlength++
      }
    }
    if (tlength == this.data.carlist.length) {
      this.data.allcheck = 'checked'
      this.data.allcheckjudeg = true
    } else {
      this.data.allcheck = ''
      this.data.allcheckjudeg = false
    }
    this.setData({
      allcheck: this.data.allcheck
    })
  },
  //全选选中取消效果方法
  atbegin(_judge, _type) {
    for (let i = 0; i < this.data.carlist.length; i++) {
      this.data.carlist[i].checked = _judge
      var checkedd = "carlist[" + i + "].checkedd"
      this.setData({
        [checkedd]: _type
      })
    }
  },
  delcheck() {
    for (let i = 0; i < this.data.carlist.length; i++) {
      if (this.data.carlist[i].checked == false) {
        this.setData({
          delbox: true
        })
        break;
      }

    }


  },
  cancel() {
    this.setData({
      delbox: false
    })
  },
  sure() {
    for (let i = 0; i < this.data.carlist.length; i++) {
      if (this.data.carlist[i].checked == false) {
        this.data.carlist.splice(i, 1)
        i--
      }
    }
    this.setData({
      delbox: false,
      carlist: this.data.carlist
    })
  },
  typebox(e) {
    let idx = e.currentTarget.dataset.index;
    // this.data.carlist[idx].typelist[1][this.data.carlist[idx].typelock] = 'type-box1-on';
    this.setData({
      typeshadow: true,
      img: this.data.carlist[idx].img1,
      nowprice: this.data.carlist[idx].nowprice,
      oldprice: this.data.carlist[idx].oldprice,
      prtName: this.data.carlist[idx].titlename,
      style: this.data.carlist[idx].typeArray[0].typetext,
      sectType: this.data.carlist[idx].typeArray[0].typename,
      typelist: this.data.carlist[idx].typeArray[0].typetextArray,
      carindex: idx,
      xpshopx:this.data.carlist[idx].typeArray
    })
  },
  typeon(e) {
    let idx = e.currentTarget.dataset.index;
    let idx1 = e.currentTarget.dataset.index1;
    this.data.carlist[this.data.carindex].typeArray[idx].typetext = this.data.carlist[this.data.carindex].typeArray[idx].typetextArray[idx1]
    this.setData({
      carlist:this.data.carlist,
      xpshopx:this.data.carlist[this.data.carindex].typeArray,
      style: this.data.carlist[this.data.carindex].typeArray[0].typetext,
    })
  },
  typesure(){
    var idx = this.data.carindex;
    var carlist = this.data.carlist
    this.setData({
      typeshadow: false,
      carlist:this.data.carlist,
    })
  },
  topay(){
    var sendlist = [];
    for(let i = 0; i < this.data.carlist.length; i++){
      if( this.data.carlist[i].checked == false){
        sendlist.push(this.data.carlist[i])
      }
    }
    wx.navigateTo({
      url: `../pay/pay?mid=3&list=${JSON.stringify(sendlist)}`
    })
  },
  toindex(){
    wx.switchTab({
      url: `../index/index`,
    })
  },
})