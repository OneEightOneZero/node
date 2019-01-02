const http = require('http');
// console.log(http);
http.get("http://sc.chinaz.com/tupian/shuaigetupian.html", (res) => {
    var temp = ""
    res.on('data', function (chunk) {
        temp = temp + chunk
    })
    res.on('end', function () {
        console.log(temp)
    })
})
console.log(1)