// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  data: {
    code:'',
    nickname:'',
    name:'',
    pw:'',
    icon:'',
    open_id:'',
    speciesindex: 0, //用于判断'分类'页面进入时左边高亮情况
    xq_item: '', //详情页面数组
    token:'',//判断是否登录
    addressinfo:[],
    speciesindex: 0, //用于判断'分类'页面进入时左边高亮情况
    xq_item: '', //详情页面数组
    all_list:[],//搜索后的存放数组
    shoparray:[],
    shopcarlist: [
      {
        typeliston: '',
        typelock: 0,
        jianType: '',
        jiaType: '',
        checked: false,
        checkedd: '',
        typestate: '爆款',
        id: 17, //商品编号
        img1: '../img/sp3.png',
        titlename: '这是商品名字',
        produce: '这是商品介绍333',
        nowprice: '99',
        oldprice: '321',
        prtnum: 1, //数量
        state: '烟', //商品类型
        imgArray: [
          '../img/sp1.png',
          '../img/sp2.png',
          '../img/sp3.png',
          '../img/sp4.png',
          '../img/sp5.png',
        ], //商品详情轮播图
        intrArray: [
          '这是商品描述1',
          '这是商品描述2',
          '这是商品描述3',
        ],
        typeArray: [{
            typename: '颜色',
            typetext: '黑色', //选中类型
            typetextArray: [
              '黑色', '白色', '绿色'
            ]
          },
          {
            typename: '分量',
            typetext: '100g', //选中类型
            typetextArray: [
              '100g', '150g', '200g'
            ]
          },

        ],


      },
      {
        typeliston: '',
        typelock: 0,
        jianType: '',
        jiaType: '',
        checked: false,
        checkedd: '',
        id: 18, //商品编号
        img1: '../img/sp7.png',
        titlename: '这是商品名字',
        produce: '这是商品介绍333',
        nowprice: '99',
        oldprice: '321',
        prtnum: 1, //数量
        state: '烟', //商品类型
        imgArray: [
          '../img/sp1.png',
          '../img/sp2.png',
          '../img/sp3.png',
          '../img/sp4.png',
          '../img/sp5.png',
        ], //商品详情轮播图
        intrArray: [
          '这是商品描述1',
          '这是商品描述2',
          '这是商品描述3',
        ],
        typeArray: [{
            typename: '颜色',
            typetext: '黑色', //选中类型
            typetextArray: [
              '黑色', '白色', '绿色'
            ]
          },
          {
            typename: '分量',
            typetext: '100g', //选中类型
            typetextArray: [
              '100g', '150g', '200g'
            ]
          },

        ], //商品类型

      },
      {
        typeliston: '',
        typelock: 0,
        jianType: '',
        jiaType: '',
        checked: false,
        checkedd: '',
        id: 19, //商品编号
        img1: '../img/sp10.png',
        titlename: '这是商品名字',
        produce: '这是商品介绍333',
        nowprice: '99',
        oldprice: '321',
        prtnum: 1, //数量
        state: '烟', //商品类型
        imgArray: [
          '../img/sp1.png',
          '../img/sp2.png',
          '../img/sp3.png',
          '../img/sp4.png',
          '../img/sp5.png',
        ], //商品详情轮播图
        intrArray: [
          '这是商品描述1',
          '这是商品描述2',
          '这是商品描述3',
        ],
        typeArray: [{
            typename: '颜色',
            typetext: '黑色', //选中类型
            typetextArray: [
              '黑色', '白色', '绿色'
            ]
          },
          {
            typename: '分量',
            typetext: '100g', //选中类型
            typetextArray: [
              '100g', '150g', '200g'
            ]
          },

        ], //商品类型

      },
      {
        typeliston: '',
        typelock: 0,
        jianType: '',
        jiaType: '',
        checked: false,
        checkedd: '',
        id: 20, //商品编号
        img1: '../img/sp1.png',
        titlename: '这是商品名字',
        produce: '这是商品介绍333',
        nowprice: '99',
        oldprice: '321',
        prtnum: 1, //数量
        state: '烟', //商品类型
        imgArray: [
          '../img/sp1.png',
          '../img/sp2.png',
          '../img/sp3.png',
          '../img/sp4.png',
          '../img/sp5.png',
        ], //商品详情轮播图
        intrArray: [
          '这是商品描述1',
          '这是商品描述2',
          '这是商品描述3',
        ],
        typeArray: [{
            typename: '颜色',
            typetext: '黑色', //选中类型
            typetextArray: [
              '黑色', '白色', '绿色'
            ]
          },
          {
            typename: '分量',
            typetext: '100g', //选中类型
            typetextArray: [
              '100g', '150g', '200g'
            ]
          },

        ], //商品类型

      },

    ],
    minelist: [
      {
        paystate:'待付款',

        // typeliston: '',
        // typelock: 0,
        // jianType: '',
        // jiaType: '',
        // checked: false,
        // checkedd: '',
        // typestate: '爆款',
        // id: 17,

        // img1: '../img/sp3.png',
        // titlename: '这是商品名字',
        // produce: '这是商品介绍333',
        // nowprice: '99',
        // oldprice: '321',
        // prtnum: 1, //数量
        // state: '烟', //商品类型
        imgArray: [
          '../img/sp1.png',
          '../img/sp2.png',
          '../img/sp3.png',
          '../img/sp4.png',
          '../img/sp5.png',
        ], //商品详情轮播图
        intrArray: [
          '这是商品描述1',
          '这是商品描述2',
          '这是商品描述3',
        ],
        typeArray: [{
            typename: '颜色',
            typetext: '黑色', //选中类型
            typetextArray: [
              '黑色', '白色', '绿色'
            ]
          },
          {
            typename: '分量',
            typetext: '100g', //选中类型
            typetextArray: [
              '100g', '150g', '200g'
            ]
          },

        ],


      },
      {
        paystate:'待付款',
        typeliston: '',
        typelock: 0,
        jianType: '',
        jiaType: '',
        checked: false,
        checkedd: '',
        typestate: '爆款',
        id: 17, //商品编号
        img1: '../img/sp3.png',
        titlename: '这是商品名字',
        produce: '这是商品介绍333',
        nowprice: '99',
        oldprice: '321',
        prtnum: 1, //数量
        state: '烟', //商品类型
        imgArray: [
          '../img/sp1.png',
          '../img/sp2.png',
          '../img/sp3.png',
          '../img/sp4.png',
          '../img/sp5.png',
        ], //商品详情轮播图
        intrArray: [
          '这是商品描述1',
          '这是商品描述2',
          '这是商品描述3',
        ],
        typeArray: [{
            typename: '颜色',
            typetext: '黑色', //选中类型
            typetextArray: [
              '黑色', '白色', '绿色'
            ]
          },
          {
            typename: '分量',
            typetext: '100g', //选中类型
            typetextArray: [
              '100g', '150g', '200g'
            ]
          },

        ],


      },
      {
        paystate:'卖家已发货',
        typeliston: '',
        typelock: 0,
        jianType: '',
        jiaType: '',
        checked: false,
        checkedd: '',
        typestate: '爆款',
        id: 17, //商品编号
        img1: '../img/sp3.png',
        titlename: '这是商品名字',
        produce: '这是商品介绍333',
        nowprice: '99',
        oldprice: '321',
        prtnum: 1, //数量
        state: '烟', //商品类型
        imgArray: [
          '../img/sp1.png',
          '../img/sp2.png',
          '../img/sp3.png',
          '../img/sp4.png',
          '../img/sp5.png',
        ], //商品详情轮播图
        intrArray: [
          '这是商品描述1',
          '这是商品描述2',
          '这是商品描述3',
        ],
        typeArray: [{
            typename: '颜色',
            typetext: '黑色', //选中类型
            typetextArray: [
              '黑色', '白色', '绿色'
            ]
          },
          {
            typename: '分量',
            typetext: '100g', //选中类型
            typetextArray: [
              '100g', '150g', '200g'
            ]
          },

        ],


      },
      {
        paystate:'待收货',
        typeliston: '',
        typelock: 0,
        jianType: '',
        jiaType: '',
        checked: false,
        checkedd: '',
        typestate: '爆款',
        id: 17, //商品编号
        img1: '../img/sp3.png',
        titlename: '这是商品名字',
        produce: '这是商品介绍333',
        nowprice: '99',
        oldprice: '321',
        prtnum: 1, //数量
        state: '烟', //商品类型
        imgArray: [
          '../img/sp1.png',
          '../img/sp2.png',
          '../img/sp3.png',
          '../img/sp4.png',
          '../img/sp5.png',
        ], //商品详情轮播图
        intrArray: [
          '这是商品描述1',
          '这是商品描述2',
          '这是商品描述3',
        ],
        typeArray: [{
            typename: '颜色',
            typetext: '黑色', //选中类型
            typetextArray: [
              '黑色', '白色', '绿色'
            ]
          },
          {
            typename: '分量',
            typetext: '100g', //选中类型
            typetextArray: [
              '100g', '150g', '200g'
            ]
          },

        ],


      },
    ]
  },

})