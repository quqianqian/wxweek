Page({

  /**
   * 页面的初始数据
   */
  data: {
    "movie": {
      "name": "投洽会明日开幕",
      "img": "http://img.xmnn.cn/003/002/790/00300279007_598912e6.jpg",
      "desc": "第二十届投洽会明日开幕 12万名客商共赴全球投资盛会",
      "isRemed":false
    },
    "movies":[
      {
        "name": "会明日开幕",
        "img": "http://img.xmnn.cn/003/002/790/00300279007_598912e6.jpg",
        "desc": "第二十届投洽会明日开幕 12万名客商共赴全球投资盛会",
        "isRemed": false
      }, {
        "name": "第二十届开幕",
        "img": "http://img.xmnn.cn/003/002/790/00300279007_598912e6.jpg",
        "desc": "第二十届投洽会明日开幕 12万名客商共赴全球投资盛会",
        "isRemed": true
      }, {
        "name": "第二日开幕",
        "img": "http://img.xmnn.cn/003/002/790/00300279007_598912e6.jpg",
        "desc": "第二十届投洽会明日开幕 12万名客商共赴全球投资盛会",
        "isRemed": true
      }
    ],
    "score":68
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
    return {
      title:"tuijian"
    }
  }
})