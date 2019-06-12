// 导出所有的控制器
const  sequelize =  require('sequelize'); 
// 导出所有的数据库映射模型
const  db = require('../controllers/db');
//定义表的模型
const  Navbar = db.define('flq_pc_navbars', {       
    typeurl: { //谁留的言
        type: sequelize.STRING(30)  
    },                              
    title: { //留言的内容   
        type: sequelize.TEXT 
    }
}, {
    freezeTableName: false
});        

Navbar.sync({ force: false}); //创建表 
module.exports =   Navbar ;  