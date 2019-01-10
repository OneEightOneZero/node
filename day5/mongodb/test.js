let {
    connect,
    insert,
    find,
    ObjectId,
    sort
} = require("./mongod.js");
(async () => {
    // let db = await connect();
    // console.log(db)
    // insert("students", [{
    //     name: "lemon",
    //     age: 18
    // }])
    // let data = await find("students", {
    //     _id: ObjectId("5c3069c073a0041b80251c67")
    // })
    let data = await sort("students", {}, {
        age: 1
    })
    console.log(data)
})()