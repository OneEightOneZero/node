var express = require('express');
var router = express.Router();
var {
    connect,
    insert,
    find,
    ObjectId
} = require("../libs/mongo.js");
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.post('/findUser', async (req, res, next) => {
    let {
        name
    } = req.body
    let data = await find(`students`, name ? {
        name
    } : {})
    res.send(data);
});

module.exports = router;