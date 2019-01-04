var express = require('express');
var router = express.Router();
var {
  find,
  insert,
  del,
  update
} = require("../libs/db.js");

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
  let data = await find(`students`, {
    id
  })
  res.send(data);
});

router.post('/login', async (req, res, next) => {
  console.log(req.body);
  let {
    inputEmail,
    inputPassword
  } = req.body
  let data = await find(`students`, {
    name: inputEmail
  })
  console.log(data)
  if (data[0].password === inputPassword) {
    res.send("success");
  } else {
    res.send("fail");
  }
});

module.exports = router;