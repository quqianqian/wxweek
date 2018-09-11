Page({

  /**
   * 页面的初始数据
   */
  data: {
    "movies": [{
        "casts": [{
            "avatars": {
              "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451727734.81.jpg"
            },
            "name": "陈凯歌"
          },
          {
            "avatars": {
              "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p67.jpg"
            },
            "name": "张国荣"
          },
          {
            "avatars": {
              "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p46345.jpg"
            },
            "name": "张丰毅"
          }
        ],
        "comments_count": 182073,
        "countries": [
          "中国大陆",
          "香港"
        ],
        "directors": [{
          "avatars": {
            "large": null
          },
          "name": "陈凯歌"
        }],
        "genres": [
          "剧情",
          "爱情",
          "同性"
        ],
        "id": 52,
        "images": {
          "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910813120.jpg"
        },
        "original_title": "霸王别姬",
        "rating": {
          "average": 9.5,
          "max": 10,
          "min": 0,
          "stars": "50"
        },
        "reviews_count": 5015,
        "summary": "",
        "title": "霸王别姬",
        "warning": "数据来源于网络整理，仅供学习，禁止他用。如有侵权请联系公众号：小楼昨夜又秋风。我将及时删除。",
        "wish_count": 83628,
        "year": 1993
      },
      {
        "casts": [{
            "avatars": {
              "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33301.jpg"
            },
            "name": "吕克·贝松"
          },
          {
            "avatars": {
              "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8833.jpg"
            },
            "name": "让·雷诺"
          },
          {
            "avatars": {
              "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2274.jpg"
            },
            "name": "娜塔莉·波特曼"
          }
        ],
        "comments_count": 203861,
        "countries": [
          "法国"
        ],
        "directors": [{
          "avatars": {
            "large": null
          },
          "name": "吕克·贝松"
        }],
        "genres": [
          "剧情",
          "动作",
          "犯罪"
        ],
        "id": 169,
        "images": {
          "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg"
        },
        "original_title": "这个杀手不太冷 Léon",
        "rating": {
          "average": 9.4,
          "max": 10,
          "min": 0,
          "stars": "45"
        },
        "reviews_count": 3776,
        "summary": "",
        "title": "这个杀手不太冷 Léon",
        "warning": "数据来源于网络整理，仅供学习，禁止他用。如有侵权请联系公众号：小楼昨夜又秋风。我将及时删除。",
        "wish_count": 71203,
        "year": 1994
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    return;

    var localThis = this;
    wx.request({
      // url: 'http://t.yushu.im/v2/movie/subject/326',
      url: 'http://t.yushu.im/v2/movie/top250?start=1&count=10',
      header: {
        'Content-Type': "json"
      },
      success: function(response) {
        console.log(response.data);
        localThis.setData({
          movies: response.data.subjects
        });
      },
      fail: function() {
        console.log('get data error');
      }
    })
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

  onOpenDetail: function(event) {
    var movieId = event.currentTarget.dataset.movieId
    console.log(movieId);
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + movieId,
    })
  }
})