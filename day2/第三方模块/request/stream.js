var request = require("request");
var fs = require("fs");
request('http://pic1.sc.chinaz.com/files/pic/pic9/201811/zzpic15032.jpg').pipe(fs.createWriteStream('handsome.jpg'));