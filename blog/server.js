const express = require('express');
const fs = require('fs');
const expressStatic = require('express-static'); // 静态文件处理
const bodyParser = require('body-parser'); // 不能解析上传的文件
const multer = require('multer');          // 可以处理上传文件
const cookieParser = require('cookie-parser'); // 解析cookie
const cookieSession = require('cookie-session'); // 使用session
const consolidate = require('consolidate'); // 模板引擎整合
const mysql = require('mysql');             // 引入mysql
// const expressRouter = require('express-router');
// const jade = require('jade');
// const ejs = require('ejs');

let objMulter = multer({dest: './static/upload/'});
let server = express();
server.listen(9000);

/**
 * 连接数据库
 * @type {Pool}
 */
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'cheng145300',
    database: 'blog_table',
    port: 3306
});

let keys = [];
for (let i = 0; i < 1000000; i++) {
    keys.push('keys' + Math.random());
}
server.use(cookieParser('fsafsafjfosajfoiaslf')); // 解析cookie 添加秘钥
server.use(cookieSession({                        // 使用session
    name: 'sess_id',
    keys: keys,
    maxAge: 20*3600*1000
}));
server.use(bodyParser.urlencoded({extended: false})); // 解析POST数据
server.use(objMulter.any()); // 解析POST文件上传数据

/**
 * 设置模板
 */
server.set('view engine', 'html');      // 输出什么东西
server.set('views', './template');         // 模板文件放在哪
server.engine('html', consolidate.ejs); // 使用那种引擎

/**
 * router
 */
server.use('/', require('./router/web.js')());
server.use('/admin/', require('./router/admin.js')());

server.use(expressStatic('./static'));   // 静态数据