//引入express模块
const express=require('express');
//引入body-parser中间件
const bodyParser=require('body-parser');
//引入路由器
const router=require('./routes/user.js');
//创建web服务器
var app=express();
//连接端口
app.listen(8080);
//托管静态文件
app.use(express.static('public'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
  extended:false
}));
//使用路由器，挂载在/user下
app.use('/user',router);
