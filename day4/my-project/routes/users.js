var express = require('express');
var router = express.Router();
var db = require("../libs/db.js");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/findUser', async (req, res, next) => {
  let {
    id,
    name,
    skill
  } = req.body
  let data = await db.connect(`select * from students where ?`, [{
    id
  }])
  res.send(data);
});

module.exports = router;