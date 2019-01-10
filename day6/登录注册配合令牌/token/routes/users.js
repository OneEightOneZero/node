var express = require('express');
var router = express.Router();
var {
  find,
  insert,
  del,
  update
} = require("../libs/mysql.js");
var token = require("../libs/token.js");
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
  console.log(req.body)
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
    res.send({
      status: "success",
      token: token.createToken({
        inputEmail,
        inputPassword
      }, 60)
    });
  } else {
    res.send({
      status: "fail"
    });
  }
});

router.post('/autoLogin', async (req, res, next) => {
  // console.log(req.headers)
  res.send({
    status: token.checkToken(req.headers.token)
  })
})

module.exports = router;