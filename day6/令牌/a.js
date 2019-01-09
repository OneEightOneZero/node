var token = require("./token.js");
let crypto = "eyJkYXRhIjp7InBhc3N3b3JkIjoxMjM0NTYsInNraWxsIjoicHMiLCJhZ2UiOjE4fSwiY3JlYXRlZCI6MTU0NzAyODMyNSwiZXhwIjoxNX0=.DaiEzTK9bzlB8UrQLUnGNJdG9HgwKuvH6Qupf6iOkqE=";
console.log(token.decodeToken(crypto))
console.log(token.checkToken(crypto))