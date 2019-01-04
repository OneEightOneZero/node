$(async () => {
    let {
        inputEmail,
        inputPassword
    } = await new Promise((resolve, reject) => {
        $("#signin").click(() => {
            let inputEmail = $("#inputEmail").val();
            let inputPassword = $("#inputPassword").val();
            console.log(inputEmail, inputPassword)
            resolve({
                inputEmail,
                inputPassword
            })
        })
    })
    var data = await new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/users/login",
            data: {
                inputEmail,
                inputPassword
            },
            success(data) {
                resolve(data)
            }
        })
    })
    console.log({
        inputEmail,
        inputPassword
    }, data)
})