// 导出所有的二级路由和web api注释 

const express = require('express');
const router = express.Router();
//引入数据库相关模块 
const navbar = require('../controllers/navbar'); 
const subnavbar = require('../controllers/subnavbar'); 

// var $$htm = require('./module/htm.ejs');
 // 一级模板
// const $$tmplFn = require('./module/util.ejs');
 // 二级模板：局部递归部分的模板，此时$$tmpl 和 $$recursiveTmpl 都是函数

/* GET home page.查找导航栏 */
router.get('/', function(req, res, next) {
   
  navbar.findAll().then(function(navmsgs) {  
    resmsgs = navmsgs; 
  }).then(function(){ 
   
    subnavbar.bulkCreate([
      {organizeNo:1001,containNo:"",subnavName:"钮扣 合金扣"}, 
      {organizeNo:1002,containNo:"",subnavName:"织带、线、绳"},
      {organizeNo:1003,containNo:"",subnavName:"花边 机织花边"}, 
      {organizeNo:1004,containNo:"",subnavName:"拉链 尼龙拉链"}, 
      {organizeNo:1005,containNo:"",subnavName:"面料 印花面料"}, 
      {organizeNo:1006,containNo:"",subnavName:"配饰 烫钻"}, 
      {organizeNo:1007,containNo:"",subnavName:"衣架 木衣架"}, 
      {organizeNo:1008,containNo:"",subnavName:"商标 织唛"}, 
      {organizeNo:1009,containNo:"",subnavName:"填料 棉花"},  
    ]).then(function(){
      subnavbar.findAll().then(function(msgs){   
   
        res.render('index',{title: '辅料圈-辅料人的交流圈',navbars: resmsgs, subnavsort: msgs});
  
      });
  

    })

  }); 
  
}); 

module.exports = router;   

// function tojson(toj,no) {  
//   for(var i in subnavmsgs){
//     if(subnavmsgs[i].containNo == null&&no==""){  
//       var obj = {
//         name: subnavmsgs[i].subnavName,
//         child: []
//       };
//       toj.push(obj);
//       var j=obj['child'];
//       tojson(j,subnavmsgs[i].organizeNo);

//     }
//     else if(subnavmsgs[i].containNo==no){
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
 
// tojson(subnavmsgs[i].subnavName,subnavmsgs[i].organizeNo); 
 
      // var subnavmsgs = JSON.parse(JSON.stringify(msgs));
      // console.log("subnavmsgs数据"+subnavmsgs);
      // 一级模板渲染使用的数据由数据和二级模板函数组成
      // var datas = {
      //   'list': subnavmsgs,
      //   'tmplFn': $$tmplFn
      // };  

      // 将数据传入，一级模板 
      // $("#subSort").append($$subnavsorttmpl(datas)); 
      // var datas = tmplFn({list:subnavmsgs,'tmplFn': $$htm}); 