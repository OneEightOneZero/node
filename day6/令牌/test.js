var token = require("./token.js");
// console.log(token);
// 加密
let crypto = token.createToken({
    password: 123456,
    skill: 'ps',
    age: 18,
}, 15)

let crypto2 = token.createToken({
    username: "laoyao",
    skill: 'ps',
    age: 18,
    token:crypto
}, 15)
console.log(crypto2)
// 解密
console.log(token.decodeToken(crypto).payload.data)

console.log(token.checkToken(crypto))