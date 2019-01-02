var request = require("request");
var fs = require("fs");
// request('http://fs.w.kugou.com/201901021514/5b14dea926010181b92dc1523332a73e/G123/M01/13/1D/uw0DAFqox3OAWe0UAD_HxYp_Ivc469.mp3').pipe(fs.createWriteStream('演员.mp3'));

request('https://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery19104592348700312441_1546415647215&hash=EFFA04ED92C0DE1E31CD3C8D4BB6B0DA&album_id=14204645&_=1546415647216').pipe(fs.createWriteStream('jsonp.js'));