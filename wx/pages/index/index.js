// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperlist:[
      {swiper:'/static/swiper/sp1.png'},
      {swiper:'/static/swiper/sp2.png'},
      {swiper:'/static/swiper/sp3.png'},
      {swiper:'/static/swiper/sp4.png'},
      {swiper:'/static/swiper/sp5.png'},
      {swiper:'/static/swiper/sp6.png'},
      {swiper:'/static/swiper/sp7.png'},
      {swiper:'/static/swiper/sp8.png'},
      {swiper:'/static/swiper/sp9.png'},
      {swiper:'/static/swiper/sp10.png'},
      {swiper:'/static/swiper/sp11.png'},
      {swiper:'/static/swiper/sp12.png'},
      {swiper:'/static/swiper/sp13.png'},
      {swiper:'/static/swiper/sp14.png'},
      {swiper:'/static/swiper/sp15.png'},
      {swiper:'/static/swiper/sp16.png'},
      {swiper:'/static/swiper/sp17.png'},
      {swiper:'/static/swiper/sp18.png'},
    ],
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
    bk_shop:[
      {img1:'/static/swiper/sp1.png',p:'这是测试呀，千万别当真了呀！兄弟们',p1:'这是进一步测试，知不知道呀！',p2:'￥99',img2:'icon-first',class:'bk-1',id:'0'},
      {img1:'/static/swiper/sp2.png',p:'这是测试呀，千万别当真了呀！兄弟们',p1:'这是进一步测试，知不知道呀！',p2:'￥99',img2:'icon-second',class:'bk-2',id:'1'},
      {img1:'/static/swiper/sp3.png',p:'这是测试呀，千万别当真了呀！兄弟们',p1:'这是进一步测试，知不知道呀！',p2:'￥99',img2:'icon-third',class:'bk-3',id:'2'},
    ],
    xp_shop:[
      {img1:'/static/swiper/sp1.png',p:'这是测试呀，千万别当真了呀！兄弟们',p1:'这是进一步测试，知不知道呀！',p2:'￥99',img2:'icon-first',class:'bk-1'},
      {img1:'/static/swiper/sp2.png',p:'这是测试呀，千万别当真了呀！兄弟们',p1:'这是进一步测试，知不知道呀！',p2:'￥99',img2:'icon-second',class:'bk-2'},
      {img1:'/static/swiper/sp3.png',p:'这是测试呀，千万别当真了呀！兄弟们',p1:'这是进一步测试，知不知道呀！',p2:'￥99',img2:'icon-third',class:'bk-3'}, 
      {img1:'/static/swiper/sp1.png',p:'这是测试呀，千万别当真了呀！兄弟们',p1:'这是进一步测试，知不知道呀！',p2:'￥99',img2:'icon-first',class:'bk-1'},
      {img1:'/static/swiper/sp2.png',p:'这是测试呀，千万别当真了呀！兄弟们',p1:'这是进一步测试，知不知道呀！',p2:'￥99',img2:'icon-second',class:'bk-2'},
      {img1:'/static/swiper/sp3.png',p:'这是测试呀，千万别当真了呀！兄弟们',p1:'这是进一步测试，知不知道呀！',p2:'￥99',img2:'icon-third',class:'bk-3'},
    ],
    all:[
      {title:'精选',p:'为你推荐',id:'0',shop:[{img1:'/static/swiper/sp1.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp2.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp3.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp4.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp5.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp6.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp7.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp8.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp9.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp10.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'}]},
      {title:'烟',p:'吞云吐雾',id:'1',shop:[{img1:'/static/swiper/sp10.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp9.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp8.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp7.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp6.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp5.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp4.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp3.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp2.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp1.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'}]},
      {title:'酒',p:'醉生梦死',id:'2',shop:[{img1:'/static/swiper/sp10.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp9.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp8.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp7.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp6.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp5.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp4.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp3.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp2.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp1.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'}]},
      {title:'玩具',p:'懵懂童趣',id:'3',shop:[{img1:'/static/swiper/sp10.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp9.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp8.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp7.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp6.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp5.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp4.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp3.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp2.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp1.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'}]},
      {title:'水',p:'生命源泉',id:'4',shop:[{img1:'/static/swiper/sp10.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp9.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp8.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp7.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp6.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp5.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp4.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp3.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp2.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp1.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'}]},
      {title:'零食',p:"闲暇神器",id:'5',shop:[{img1:'/static/swiper/sp10.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp9.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp8.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp7.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp6.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp5.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp4.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp3.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp2.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp1.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'}]},
      {title:'生活用品',p:'小康社会',id:'6',shop:[{img1:'/static/swiper/sp10.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp9.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp8.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp7.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp6.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp5.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp4.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp3.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp2.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'},{img1:'/static/swiper/sp1.png',p:'这是测试呀，兄弟们，时代锦刷卡机到拉萨空当接龙三',p1:'￥1999'}]},
    ],
    current:0,
  },

  topbar:function(e){
    var id = e.currentTarget.dataset.id;
    this.setData({
      current:id
    })
  },
  faddish(e){
    var faddish = e.currentTarget.dataset.faddish;
    for(let i=0;i<this.data.bk_shop.length;i++){
      if(faddish == this.data.bk_shop[i].id){
        // console.log(this.data.bk_shop[i]);
        wx.navigateTo({
          url: `../shop/shop?faddish=${JSON.stringify(this.data.bk_shop[faddish])}`
        })
      }
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

  }
})