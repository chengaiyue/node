const express = require('express');
const fs = require('fs');
const expressStatic = require('express-static');
const bodyParser = require('body-parser'); // 不能解析上传的文件
const multer = require('multer');          // 可以处理上传文件
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate'); // 模板引擎整合
// const jade = require('jade');
// const ejs = require('ejs');

let objMulter = multer({dest: './www/upload/'});
let server = express();

let keys = [];
for (let i = 0; i < 1000000; i++) {
    keys.push('keys' + Math.random());
}
server.use(cookieParser('fsafsafjfosajfoiaslf')); // 解析cookie 添加秘钥
server.use(cookieSession({                        // 使用session
    name: 'ssid',
    keys: keys,
    maxAge: 20*3600*1000
}));
server.use(bodyParser.urlencoded({extended: false})); // 解析POST数据
server.use(objMulter.any()); // 解析POST文件上传数据

/**
 * 设置server全局配置
 */
server.set('view engine', 'html');      // 输出什么东西
server.set('views', './views');         // 模板文件放在哪
server.engine('html', consolidate.ejs); // 使用那种引擎

/**
 * 接受用户请求
 */
server.use('/', function(req, res, next) {
    // console.log(req.query, req.body, req.cookies, req.session, req.files);
    res.render('index.ejs', {name: 'zcc'});
});

server.use(expressStatic('./www'));   // 静态数据

server.listen(8999);