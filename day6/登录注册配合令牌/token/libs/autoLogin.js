var token = require("./token.js");
module.exports = (req, res, callback) => {
    console.log(token.checkToken(req.headers.token));
    if (token.checkToken(req.headers.token)) {
        callback()
    } else {
        res.send({
            status: "token失效"
        })
    }
}