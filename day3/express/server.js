var express = require("express");
var fs = require("fs");
// console.log(express);
var app = express(); // 实例化一个express的服务器应用
// console.log(app);

// 服务器处理路径为 / 的get请求   请求和响应
// 处理完成后，将执行后面的回调函数
// 处理前端发过来（一般就是ajax）的请求request （数据处理，数据库操作，文件读写） 后端根据需要去返回对应的结果response
// req ->  $_GET[]   $_POST[]
// mysql_query()
// res ->  echo
app.get("/", (req, res) => {
    res.send('你好') // echo 'hello world';
})

app.get("/index.html", (req, res) => {
    // 读文件
    function readFile() {
        return new Promise((resolve, reject) => {
            fs.readFile("./index.html", (err, data) => {
                resolve(data.toString())
            })
        })
    }
    // 响应结果
    function echo(data) {
        res.send(data) // echo 'hello world';
    }
    (async function () {
        var data = await readFile();
        await echo(data);
    })()
})

app.get("/index.js", (req, res) => {
    // 读文件
    function readFile() {
        return new Promise((resolve, reject) => {
            fs.readFile("./index.js", (err, data) => {
                resolve(data.toString())
            })
        })
    }
    // 响应结果
    function echo(data) {
        res.send(data) // echo 'hello world';
    }
    (async function () {
        var data = await readFile();
        await echo(data);
    })()
})

app.listen(3000) //用3000端口处理请求
console.log("开启服务器")