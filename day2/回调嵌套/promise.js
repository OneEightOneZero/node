// setTimeout(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//         }, 1000)
//     }, 1000)
// }, 1000)

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
a().then(c).then(b)