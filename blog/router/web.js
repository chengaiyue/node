const express = require('express');

module.exports = function () {
    let router = express.Router();

    router.use('/', (req, res) => {
        console.log(11111);
        res.send('web').end();
    });

    return router;
};