var app = require('../app');
//  socket服务器
var server = require('http').Server(app);

var socketServer = require('ws').Server;
var wss = new socketServer({server: server, port: 8080});

module.exports = wss;