const express = require('express');

let server = express();

server.use('/a.html', function(req, res) {
    res.send('abc');
    res.end();
});

server.listen(8999);