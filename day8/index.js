// console.log(window)
// console.log(document)
// yarn npm cnpm
// input output


// 硬盘 -> 内存 -> 系统
var fs = require('fs');
// 一次性换
// fs.readFile('input.txt',(err,data)=>{
//     console.log(data)
// });
// 慢慢读
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');
// console.log(readerStream);


// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

// 10G   2G
// 硬解
// 软解
// 8G
// 做一个有种的中国人