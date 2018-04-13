const express = require('express');

let server = express();

let userRouter = express.Router();
server.use('/user', userRouter);

userRouter.get('/1.html', function (req, res) {
    res.send('aaa');
    res.end();
});

server.listen(8999);