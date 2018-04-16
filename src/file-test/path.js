const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

let objMulter = multer({dest: '../www/upload'}); // dest 指定文件上传路径

let server = express();
server.use(objMulter.any());
server.post('/', function (req, res) {
    let ext = path.parse(req.files[0].originalname).ext;
    let newName = req.files[0].path + ext;
    fs.rename(req.files[0].path, newName, function (err) {
        if (!err) {
            res.send('上传成功');
        } else {
            res.send('上传失败');
        }
        res.end();
    })
});

server.listen(8998);

