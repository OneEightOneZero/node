var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '8889', // 默认是3306
    database: '1810'
});
pool.query('SELECT * FROM students', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});
pool.query('SELECT * FROM students', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});