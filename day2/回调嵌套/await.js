function a() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(1);
            resolve();
        }, 1000)
    })
}

function b() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(2);
            resolve();
        }, 1000)
    })
}

function c() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(3);
            resolve();
        }, 1000)
    })
}
// a().then(c).then(b)
// await一定要配合async
(async function () {
    await b();
    await c();
    await a();
})()