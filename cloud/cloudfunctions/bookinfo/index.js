// 云函数入口文件
var rp = require('request-promise');
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {
  const url = "https://api.douban.com/v2/book/isbn/" + event.isbn
  console.log(url)
  var res = rp(url).then(
    html => {
      return html
    }).catch(err => {
    console.log(err)
  })

  // return event.isbn;
  return res;
}