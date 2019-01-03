function getCity() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("获取城市");
            resolve("广州");
        }, 1000)
    })
}
function getCityWeather(city) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("获取天气",city);
            resolve("晴天");
        }, 1000)
    })
}

function notify(data) {
    console.log(data)
}
// getCity.then(getCityWeather).then(notify)

(async function(){
    var city = await getCity();
    console.log(city);
    var weather = await getCityWeather(city);
    console.log(weather);
})()