# 令牌登录

- token
- localstorage

localStorage和sessionStorage空间大但是没有时效性

cookie具备最多功能(键值对，时效性等等)，但是缺点空间小


# localStorage
localStorage一直保存，主题颜色，白天模式或者夜间模式，token
```js
// 增加 更新
localStorage.setItem(key,value);
// 查
let value = localStorage.getItem(key);
localStorage.removeItem(key);
// 全部清除
localStorage.clear();
```
sessionStorage网页如果关闭的话，就清除，页面缓存的数据
```js
// 增加 更新
sessionStorage.setItem(key,value);
// 查
let value = sessionStorage.getItem(key);
sessionStorage.removeItem(key);
// 全部清除
sessionStorage.clear();
```

# 遇到的开发问题

- git空白字符问题
- 分号问题
```js
console.log("1");
(function(){
	console.log("2")
})()
```
- node模块安装问题，缺失模块，npm安装的失败，重新删除再安装`yarn或者cnpm`安装
- localStorage和sessionStorage不能存储对象
```js
localStorage.setItem("name",JSON.stringify({name:"ly"}))
```