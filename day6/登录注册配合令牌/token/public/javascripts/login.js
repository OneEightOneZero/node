$(() => {
    let signIn = $("#signIn");
    let login = (inputEmail, inputPassword) => {
        return new Promise((resolve, reject) => {
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
    signIn.click(async () => {
        let inputEmail = $("#inputEmail").val();
        let inputPassword = $("#inputPassword").val();
        let data = await login(inputEmail, inputPassword);

        let fn = {
            success() {
                console.log('登录成功');
                localStorage.setItem("token", data.token)
                location.href = "dashboard.html"
            },
            fail() {
                console.log('登录失败');
            },
            other(){
                
            }
        }
        fn[data.status]()
        // if (data.status === 'success') {
        //     console.log('登录成功');
        //     localStorage.setItem("token",data.token)
        //     location.href = "dashboard.html"
        // } else {
        //     console.log('登录失败');
        // }
    })
})