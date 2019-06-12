// 导出所有的控制器
const  sequelize =  require('sequelize'); 
// 导出所有的数据库映射模型
const  db = require('../controllers/db');
//定义表的模型 
const subnav = db.define('flq_pc_category',{            
    organizeNo: sequelize.INTEGER,
    containNo: sequelize.INTEGER, 
    subnavName: sequelize.STRING(30), 
    subnavContent: sequelize.STRING(30)
}, {
    freezeTableName: false
});

subnav.sync({ force: false}); 
module.exports =   subnav ;  