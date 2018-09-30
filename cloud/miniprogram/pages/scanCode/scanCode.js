// pages/scanCode/scanCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  onScanCode: function(event) {
    // console.log(event);
    wx.scanCode({
      success: res => {
        console.log(res.result);
        wx.cloud.callFunction({
          // 要调用的云函数名称
          name: 'bookinfo',
          // 传递给云函数的参数
          data: {
            isbn: res.result
          },
          success: res => {
            // output: res.result === 3
            var bookstring = res.result
            // console.log(JSON.parse(bookstring))
            //需要先到平台创建集合，然后再做下面的操作
            // 先初始化数据库的连接
            const db = wx.cloud.database()
            // 再选择需要的集合
            const books = db.collection('book')
            db.collection('book').add({
              // data 字段表示需新增的 JSON 数据
              data: JSON.parse(bookstring)
            }).then(res => {
              // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
              console.log(res)
            }).catch(err => {
              // handle error
              console.log(err);
            })
          },
          fail: err => {
            // handle error
            console.log(err);
          }
        })
      },
      fail: err => {
        console.log(err);
      }
    })
  }
})