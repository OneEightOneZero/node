var socketServer = require('ws').Server;
var wss = new socketServer({
	port: 8080
});

wss.on('connection', function (client) {
    // setInterval(() => {
    //     client.send('test')
    // }, 1000);
    client.on('message', function (_message) {
        console.log(_message)
        // setInterval(() => {
        //     client.send('test')
        // }, 1000);

        // console.log(wss.clients)
        // 自收自发  类似ajax
        // client.send(_message)
        // 自收全发 
        wss.broadcast(_message);
    	// var _messageObj = JSON.parse(_message);
        // //status = 1 表示正常聊天
        // _messageObj.status = 1;
    	// this.message = _messageObj;
        // //把客户端的消息广播给所有在线的用户
        // wss.broadcast(_messageObj);
    });

    // 退出聊天  
    client.on('close', function() {  
        try{
            //把客户端的消息广播给所有在线的用户
            wss.broadcast('你关闭了');  
        }catch(e){  
            console.log('刷新页面了');  
        }  
    });  
});

//定义广播方法
wss.broadcast = function broadcast(_message) {  
    wss.clients.forEach(function(client) { 
        client.send(_message)
    });  
}; 