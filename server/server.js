/*
后台启动服务器的入口模块
1. 引入express
2. 生成应用对象(执行express函数)
3. 注册根路由(使用app的use())
4. 启动服务器(使用app监听指定端口)
 */
//1. 引入express
let express = require('express');
const bodyParser = require('body-parser');// 解析请求体
const cookieParser = require('cookie-parser');
//引入路由器
let appRouter = require('./appRouter');
// 2. 生成应用对象(执行express函数)
let app = express();
app.use(cookieParser()); // 解析cookie数据
app.use(bodyParser.json()); // 解析请求体(ajax请求: json数据格式)
app.use(bodyParser.urlencoded({ extended: false })); // 解析请求体(表单数据)
// 3. 注册根路由(使用app的use())
// app.use('/', function (req, res) {
// //   res.send('hello server');
// // });
app.use('/api', appRouter);
// 4. 启动服务器(使用app监听指定端口)
app.listen(8888, function () {
  console.log('app is running at port 8888.....');
});