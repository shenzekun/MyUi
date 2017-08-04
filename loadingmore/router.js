//假设域名是localhost, 端口是8080

//更多详细使用方法参考 http://www.expressjs.com.cn/guide/routing.html

/**
 * 当 http://localhost:8080/getInfo 的GET请求到来时被下面匹配到进行处理
 * 发送JSON格式的响应数据 {name: 'ruoyu'}
 */
router.get('/getInfo', function (req, res) {
  res.send({
    name: 'ruoyu'
  })
  // info = require(./db.json)
  // res.send(info)
})



/**
 * 当 http://localhost:8080/getFriends 的GET请求到来时被下面匹配到进行处理
 * 通过req.query获取请求的参数对象 
 * 通过 req.send发送响应
 */
router.get('/getData', function (req, res) {
  var data = [];
  console.log(req.query.len);
  for (var i = 0; i < req.query.len; i++) {
    data[i] = parseInt(req.query.start) + i;
  }
  res.send({
    status: 1,
    data: data
  })
})