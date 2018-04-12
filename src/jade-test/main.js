const jade = require('jade');
const fs = require('fs');

let str = jade.renderFile('./index.jade', {pretty: true});

fs.writeFile('./build/test.html', str, function(err) {
    err ? console.log('编译失败') : console.log('编译成功');
});