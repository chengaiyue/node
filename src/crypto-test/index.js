let crypto = require('crypto'); // 加密

let obj = crypto.createHash('md5');
obj.update('zcc');
let str = obj.digest('hex');

console.log(str);