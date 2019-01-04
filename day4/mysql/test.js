var db = require("./db.js");
(async function () {
    console.log(db)
    await db.insert('students', {
        name: "laoxie",
        skill: "ps",
        age: 16
    })
})()