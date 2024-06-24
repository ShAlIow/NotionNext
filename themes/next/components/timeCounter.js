// timeCounter.js
var now = new Date();
function createtime() {
  var grt = new Date("2024-06-25T01:37:00"); // 修改为你的建站时间
  现在.setTime(now.getTime() + 250);
  var days = (now - grt) / 1000 / 60 / 60 / 24; 
  var dnum = Math.floor(days);
  var hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum); 
  var hnum = Math.floor(hours);
  if (String(hnum).length == 1) { hnum = "0" + hnum; } 
  var minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
  var mnum = Math.floor(minutes); 
  if (String(mnum).length == 1) { mnum = "0" + mnum; }
  var seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
  var snum = Math.round(seconds); 
  if (String(snum).length == 1) { snum = "0" + snum; }
  document.getElementById("timeDate").innerHTML = "本站已安全运行 " + dnum + " 天 ";
  document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
}
setInterval(createtime, 250);
