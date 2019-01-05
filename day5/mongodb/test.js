let {
    connect,
    insert,
    find,
    ObjectId
} = require("./mongod.js");
(async () => {
    // let db = await connect();
    // console.log(db)
    // insert("students", [{
    //     name: "lemon",
    //     age: 18
    // }])
    let data = await find("students", {
        _id: ObjectId("5c3069c073a0041b80251c67")
    })
    console.log(data)
})()