const express = require('express');
const mysql = require('mysql');

let server = express();

//连接池  不用重复连接
const db1 = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'cheng145300',
    port: 3306,
    database: 'test'
});

// 连接(服务器， 用户名， 密码， 库)
let db2 = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cheng145300',
    port: 3306,
    database: 'test'
});

db2.query('select * from user_table', function (err, data) {
    err ? console.log(err) : console.log(data);
});

server.listen(8999);