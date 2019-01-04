let {
    connect,
    find,
    insert,
    del,
    update
} = require("./libs/db.js");
// find('SELECT * FROM students', null).then(data => console.log(data)).catch((err) => {
//     console.log(err)
// })
(async () => {
    // let data = await find('students', {
    //     id: 2,
    // });
    // await insert('students', {
    //     name: 'laotian',
    //     skill: 'ae',
    //     age: 15
    // })
    // await del('students', {
    //     id: 2
    // })
    // console.log(data);
    await update('students', {
        name: 'laotian',
        skill: 'art,music',
        age: 14
    }, {
        name: 'laoyao'
    })
})()