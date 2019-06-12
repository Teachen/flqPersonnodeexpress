// 导出所有的二级路由和web api注释 

const express = require('express');
const router = express.Router();
//引入数据库相关模块 
const navbar = require('../controllers/navbar'); 
const subnavbar = require('../controllers/subnavbar'); 

// var htm = require('./module/athlete_infohome.ejs');
 // 一级模板
// var tmplFn = require('./module/util.ejs');
 // 二级模板：局部递归部分的模板，此时$$tmpl 和 $$recursiveTmpl 都是函数

/* GET home page.查找导航栏 */
router.get('/', function(req, res, next) {
   
  navbar.findAll().then(function(navmsgs) {  
    resmsgs = navmsgs; 
  }).then(function(){ 
   
    subnavbar.findAll().then(function(msgs){   

      
      // var subnavmsgs = JSON.parse(JSON.stringify(msgs));
      // console.log("subnavmsgs数据"+subnavmsgs);
       
      // tojson(subnavmsgs[i].subnavContent,subnavmsgs[i].organizeNo);  
      // 一级模板渲染使用的数据由数据和二级模板函数组成
      // var datas = {
      //   'list': subnavmsgs,
      //   'tmplFn': $$recursiveTmpl 
      // };  

      // 将数据传入，一级模板 
      // $("#subSort").append($$subnavsorttmpl(datas)); 
      // var htm = tmplFn({list:j,'tmplFn': tmplFn, id: 'subSort'});
      res.render('index',{title: '辅料圈-辅料人的交流圈',navbars: resmsgs, subnavsort: msgs}); 
    });

  }); 
  
}); 

module.exports = router;   



      // function tojson(toj,no) { 

      //   for(var i in subnavmsgs){
      //     if(subnavmsgs[i].containNo == no){  
      //       var obj = {
      //         name: subnavmsgs[i].subnavName,
      //         child: []
      //       };
      //       toj.push(obj);
      //       var j=obj['child'];
      //       tojson(j,subnavmsgs[i].organizeNo);

      //     }
      //   }  
      // } 