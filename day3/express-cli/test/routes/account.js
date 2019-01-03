var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function (req, res, next) {
    // console.log(req.body);// $_POST[]
    let {
        name,
        password
    } = req.body;
    console.log(name, password)
    res.send('登录');
});

router.post('/register', function (req, res, next) {
    res.send('注册');
});

router.all('/token', function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    // console.log(req)
    // console.log(req.headers)
    // let {
    //     abc,
    //     bbb,
    //     ddd
    // } = req.headers;
    // console.log(abc,bbb,ddd)
    console.log(req.query);
    console.log(req.body);
    res.send(`
        callback('你好')
    `);
});

module.exports = router;