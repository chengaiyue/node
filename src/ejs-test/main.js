let ejs = require('ejs');

ejs.renderFile('./index.ejs', {name: 'zcc'}, function (err, data) {
    console.log(data);
});