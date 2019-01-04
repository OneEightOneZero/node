var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '8889', // 默认是3306
    database: '1810'
});

function connect(sql, params) {
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if (err) throw err; // not connected!
            // Use the connection
            connection.query(sql, params, function (error, results, fields) {
                if (error) {
                    throw error;
                    reject(error)
                } else {
                    resolve(results)
                    // When done with the connection, release it.
                    connection.release();
                    // Handle error after the release.
                }
                // Don't use the connection here, it has been returned to the pool.
            });
        })
    });
}

module.exports = {
    connect
}