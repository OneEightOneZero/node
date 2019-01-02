const fs = require('fs'); //直接引模块名字，那它要不就是内置模块，要不就是第三方模块
//console.log(fs);
// fs.readFile('../day1.md',{
//     encoding:'utf8',
//     flag:'r'
// },(err,data)=>{
//     if (err) throw err;
//     console.log(data)
// })

fs.writeFile("./index.html", `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <p>hello world</p>
    </body>
    </html>
`, function (err, data) {
    if (err) throw err;
    console.log(data)
})