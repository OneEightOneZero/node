$(() => {
    (async () => {
        let fn = {
            true: async () => {
                console.log(isLogin);
                let data = await fn.getUserList();
                console.log(data);
                let html = data.map((item, index) => {
                    return `
                        <tr>
                            <td>${item._id}</td>
                            <td>${item.name}</td>
                            <td>${item.age}</td>
                            <td>${item.skill}</td>
                            <td>${item.description}</td>
                        </tr>            
                    `
                }).join("");
                $("#list").html(html);
            },
            false() {
                location.href = "login.html";
                return this;
            },
            log() {
                console.log("执行完毕");
                return this;
            },
            finish() {
                console.log("执行完毕2")
            },
            getUserList() {
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: "POST",
                        headers: {
                            token: localStorage.getItem("token")
                        },
                        url: "http://localhost:3000/setting/findUser",
                        success(data) {
                            resolve(data)
                        }
                    })
                })
            },
            autoLogin() {
                return new Promise((resolve, reject) => {
                    $.ajax({
                        type: "POST",
                        headers: {
                            token: localStorage.getItem("token")
                        },
                        url: "http://localhost:3000/users/autoLogin",
                        success(data) {
                            resolve(data)
                        }
                    })
                })
            }
        }
        let isLogin = await fn.autoLogin();
        // 异步 awiat和async
        fn[isLogin.status]()

        // 链式调用
        fn.log()
            .finish()
        // if (isLogin.status) {
        //     console.log(isLogin);
        //     let data = await getUserList();
        //     console.log(data);
        //     let html = data.map((item, index) => {
        //         return `
        //         <tr>
        //             <td>${item._id}</td>
        //             <td>${item.name}</td>
        //             <td>${item.age}</td>
        //             <td>${item.skill}</td>
        //             <td>${item.description}</td>
        //         </tr>            
        //     `
        //     }).join("");
        //     $("#list").html(html);
        // } else {
        //     location.href = "login.html"
        // }
    })()
})