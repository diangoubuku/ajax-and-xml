//引入express模块
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器
var router=express.Router();
//注册路由
router.get('/login/:uname&:upwd',(req,res)=>{
  var $uname=req.params.uname;
  var $upwd=req.params.upwd;
  pool.query("select * from xz_user where uname=? and upwd=?",[$uname,$upwd],(err,result)=>{
    if(result.length>0){
	  res.send("1");
	}else{
		  res.send("0");
	  }
  });
});




router.get('/reg',(req,res)=>{
  pool.query('select * from xz_user',(err,result)=>{
    res.send(result);
  });
});

//导出路由器对象
module.exports=router;