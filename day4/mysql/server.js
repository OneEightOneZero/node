var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '8889', // 默认是3306
    database: '1810'
});
connection.connect();
console.log("连接数据库")
connection.query('SELECT * FROM students', function (error, results, fields) {
    console.log("获取数据")
    if (error) throw error;
    console.log('The solution is: ', results);
});
// 同步阻塞
// 异步非阻塞
console.log("关闭数据库")
connection.end();