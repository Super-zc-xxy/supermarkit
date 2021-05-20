// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baozhang:[
      {img1:'icon-shangpin',p:'正品商品'},
      {img1:'icon-approve',p:'官方认证'},
      {img1:'icon-manjianyouhui',p:'满减优惠'},
    ],
    shop:[
      {img1:'icon-yancao',p:'烟',id:'0'},
      {img1:'icon-jiu_',p:'酒',id:'1'},
      {img1:'icon-wanju',p:'玩具',id:'2'},
      {img1:'icon-water',p:'水',id:'3'},
      {img1:'icon-lingshi',p:'零食',id:'4'},
      {img1:'icon-shenghuoyongpin',p:'生活用品',id:'5'},
    ],
    all:[
      {title:'精选',p:'为你推荐',id:'0', shoplist:[
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'0'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'0'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'0'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'0'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'0'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'0'},
      ]},
      {title:'烟',p:'吞云吐雾',id:'1', shoplist:[
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'1'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'1'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'1'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'1'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'1'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'1'},
      ]},
      {title:'酒',p:'醉生梦死',id:'2', shoplist:[
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'2'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'2'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'2'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'2'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'2'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'2'},
      ]},
      {title:'玩具',p:'懵懂童趣',id:'3', shoplist:[
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'3'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'3'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'3'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'3'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'3'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'3'},
      ]},
      {title:'水',p:'生命源泉',id:'4', shoplist:[
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'4'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'4'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'4'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'4'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'4'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'4'},
      ]},
      {title:'零食',p:"闲暇神器",id:'5', shoplist:[
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'5'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'5'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'5'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'5'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'5'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'5'},
      ]},
      {title:'生活用品',p:'小康社会',id:'6', shoplist:[
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'6'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'6'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'6'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'6'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'6'},
        {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'6'},
      ]},
    ],
    current:0,
    shoplist:[
      {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'0',bk_state:'1',xp_state:'2',shopswiper:[{img1:'/static/swiper/sp1.png',id:'1'},{img1:'/static/swiper/sp5.png',id:'2'},{img1:'/static/swiper/sp2.png',id:'3'},{img1:'/static/swiper/sp3.png',id:'4'},{img1:'/static/swiper/sp4.png',id:'5'}],shopproduce:[{img1:'icon-1',p:'4倍书写长度'},{img1:'icon-icon-test',p:'日本MLKUNI油墨'},{img1:'icon-3',p:'0.5mm弹簧子弹头'}],
      shopnum:1,shopaddresstate:false,shopaddress:true,},
      {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'0',bk_state:'0',xp_state:'2',shopswiper:[{img1:'/static/swiper/sp1.png',id:'1'},{img1:'/static/swiper/sp5.png',id:'2'},{img1:'/static/swiper/sp2.png',id:'3'},{img1:'/static/swiper/sp3.png',id:'4'},{img1:'/static/swiper/sp4.png',id:'5'}],shopproduce:[{img1:'icon-1',p:'4倍书写长度'},{img1:'icon-icon-test',p:'日本MLKUNI油墨'},{img1:'icon-3',p:'0.5mm弹簧子弹头'}]
      ,shopnum:1,shopaddresstate:false,shopaddress:true,},
      {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'0',bk_state:'0',xp_state:'2',shopswiper:[{img1:'/static/swiper/sp1.png',id:'1'},{img1:'/static/swiper/sp5.png',id:'2'},{img1:'/static/swiper/sp2.png',id:'3'},{img1:'/static/swiper/sp3.png',id:'4'},{img1:'/static/swiper/sp4.png',id:'5'}],shopproduce:[{img1:'icon-1',p:'4倍书写长度'},{img1:'icon-icon-test',p:'日本MLKUNI油墨'},{img1:'icon-3',p:'0.5mm弹簧子弹头'}],shopnum:1,shopaddresstate:false,shopaddress:true,},
      {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'0',bk_state:'1',xp_state:'2',shopswiper:[{img1:'/static/swiper/sp1.png',id:'1'},{img1:'/static/swiper/sp5.png',id:'2'},{img1:'/static/swiper/sp2.png',id:'3'},{img1:'/static/swiper/sp3.png',id:'4'},{img1:'/static/swiper/sp4.png',id:'5'}],shopproduce:[{img1:'icon-1',p:'4倍书写长度'},{img1:'icon-icon-test',p:'日本MLKUNI油墨'},{img1:'icon-3',p:'0.5mm弹簧子弹头'}],shopnum:1,shopaddresstate:false,shopaddress:true,},
      {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'0',bk_state:'1',xp_state:'2',shopswiper:[{img1:'/static/swiper/sp1.png',id:'1'},{img1:'/static/swiper/sp5.png',id:'2'},{img1:'/static/swiper/sp2.png',id:'3'},{img1:'/static/swiper/sp3.png',id:'4'},{img1:'/static/swiper/sp4.png',id:'5'}],shopproduce:[{img1:'icon-1',p:'4倍书写长度'},{img1:'icon-icon-test',p:'日本MLKUNI油墨'},{img1:'icon-3',p:'0.5mm弹簧子弹头'}],shopnum:1,shopaddresstate:false,shopaddress:true,},
      {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'0',bk_state:'0',xp_state:'2',shopswiper:[{img1:'/static/swiper/sp1.png',id:'1'},{img1:'/static/swiper/sp5.png',id:'2'},{img1:'/static/swiper/sp2.png',id:'3'},{img1:'/static/swiper/sp3.png',id:'4'},{img1:'/static/swiper/sp4.png',id:'5'}],shopproduce:[{img1:'icon-1',p:'4倍书写长度'},{img1:'icon-icon-test',p:'日本MLKUNI油墨'},{img1:'icon-3',p:'0.5mm弹簧子弹头'}],shopnum:1,shopaddresstate:false,shopaddress:true,},
      {img1:'/static/swiper/sp1.png',title:'test1',produce:'这是介绍',price:'99',state:'0',bk_state:'0',xp_state:'0',shopswiper:[{img1:'/static/swiper/sp1.png',id:'1'},{img1:'/static/swiper/sp5.png',id:'2'},{img1:'/static/swiper/sp2.png',id:'3'},{img1:'/static/swiper/sp3.png',id:'4'},{img1:'/static/swiper/sp4.png',id:'5'}],shopproduce:[{img1:'icon-1',p:'4倍书写长度'},{img1:'icon-icon-test',p:'日本MLKUNI油墨'},{img1:'icon-3',p:'0.5mm弹簧子弹头'}],shopnum:1,shopaddresstate:false,shopaddress:true,}
    ],
    xp_shoplist:[],
    bk_shoplist:[]
  },

  topbar:function(e){
    var id = e.currentTarget.dataset.id;
    this.setData({
      current:id
    })
  },
  //封装跳转函数
  faddish(e,_array){
    var faddish = e.currentTarget.dataset.faddish -0;
        wx.navigateTo({
          url: `../shop/shop?faddish=${JSON.stringify(_array[faddish])}`
        })
  },
  //调用函数
  xiangqin(e){
    this.faddish(e,this.data.shoplist)
  },
  //调用爆款详情
  bk(e){
    this.faddish(e,this.data.bk_shoplist)
  },
  //调用新品好物
  xp(e){
    this.faddish(e,this.data.xp_shoplist)
  },
  //调用显示首页下面
  show(e){
    this.faddish(e,this.data.all[this.data.current].shoplist);
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
    for(let i=0;i<this.data.shoplist.length;i++){
      if(this.data.shoplist[i].bk_state == 1){
        this.data.bk_shoplist.push(this.data.shoplist[i]);
      }
      if(this.data.shoplist[i].xp_state == 2){
        this.data.xp_shoplist.push(this.data.shoplist[i]);
      }
    }
    this.setData({
      bk_shoplist:this.data.bk_shoplist,
      xp_shoplist:this.data.xp_shoplist
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //循环数据，动态添加新数组
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