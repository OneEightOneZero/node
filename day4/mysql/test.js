var db = require("./db.js");
console.log(db);
(async function () {
    // db.connect("SELECT * FROM students", null).then((data) => {
    //     console.log(data)
    // })
    var data = await db.connect("SELECT * FROM students", null);
    // db.connect("SELECT * FROM students where ?", [{
    //     id: 1
    // }]).then((data) => {
    //     console.log(data)
    // })
    console.log(data)
    var data2 = await db.connect("SELECT * FROM students where ?", [{
        id: 1
    }])
    console.log(data2)
    // await async
})()