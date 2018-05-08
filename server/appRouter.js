/*
后台应用的路由器模块
1. 引入express
2. 得到路由器
3. 注册n个路由
4. 向外暴露路由器
5. 通过 app使用上路由器
 */
// 1. 引入express
let express = require('express');
let md5 = require('blueimp-md5');
let models = require('./models');
let UserModel = models.getModel('user');
const _filter = {pwd: 0};
// 2. 得到路由器
let router = express.Router();
// 3. 注册n个路由
router.post('/register', function (req, res) {
  let {name, pwd, type} = req.body;
  UserModel.findOne({name}, function (err, user) {
    if (user) {
      res.send({code: 1, msg: '用户名已存在！'});
    } else {
      const userModel = new UserModel({name, pwd: md5(pwd), type});
      userModel.save(function (err, user) {
        res.cookie('user_id', user._id);
        res.send({code: 0, data: {_id: user._id, name, pwd, type}});
      })
    }
  })
});

router.post('/login', function (req, res) {
  let {name, pwd} = req.body;
  UserModel.findOne({name, 'pwd': md5(pwd)}, _filter, function (err, user) {
    if (!user) {
      res.send({code: 1, msg: '用户名或密码错误'});
    } else {
      res.cookie('user_id', user._id);
      res.send({code: 0, data: user});
    }
  });
});
// 4. 向外暴露路由器
module.exports = router;