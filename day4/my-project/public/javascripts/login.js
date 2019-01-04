$(() => {
    $("#signin").click(async () => {
        let inputEmail = $("#inputEmail").val();
        let inputPassword = $("#inputPassword").val();
        console.log(inputEmail, inputPassword);
        let data = await login({
            inputEmail,
            inputPassword
        });
        console.log(data);
    })

    function login(inputEmail, inputPassword) {
        return new Promise((resolve, reject) => {
            console.log(1)
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
    }
})