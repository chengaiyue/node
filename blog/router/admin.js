const express = require('express');

module.exports = function () {
    let router = express.Router();
    /*router.use((req, res, next) => {
        console.log(req.session, req.url);
        if (!req.session['admin_id'] && req.url != '/login') {
            res.redirect('/login');
        } else {
            next();
        }
    });*/

    router.use('/', (req, res) => {
        res.send('我是admin', {});
    });

    return router;
};