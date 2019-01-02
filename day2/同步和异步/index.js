function a(){
    console.log("a")
}

function b(callback){
    setTimeout(()=>{
        callback()
    },1000)
    console.log("b")
}



a()
b(()=>{
    console.log("c")
})
