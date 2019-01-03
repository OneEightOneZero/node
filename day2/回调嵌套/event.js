const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
// 监听者
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// // 观察者
// myEmitter.emit('event');

myEmitter.on('buypiza', () => {
    setTimeout(() => {
        console.log('买披萨');
        myEmitter.emit('eatpiza');
    }, 1000)
});

myEmitter.on('eatpiza', () => {
    setTimeout(() => {
        console.log('吃披萨');
        myEmitter.emit('meeting');
    }, 2000)
});

myEmitter.on('meeting', () => {
    console.log('约会');
});
myEmitter.emit('buypiza');

{/* <button onclick="test()"></button> */}