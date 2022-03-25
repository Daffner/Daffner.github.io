let strRadius = "20";
var can = document.getElementById("canvas");
let w = can.clientWidth;
let h = can.clientHeight;
//var map = document.getElementById("mapOne");
//map.areas[0].setAttribute("coords",(""+(w/2)+","+(h/2)+","+strRadius));
var con = can.getContext("2d");
let data = con.getImageData(0,0,can.width,can.height);
let red = [];
let green = [];
let blue = [];
let alpha = [];
for (int i = 0; i < data.length; i+=4){
  red[i/4] = data[i];
  green[i/4] = data[i+1];
  blue[i/4] = data[i+2];
  alpha[i/4] = data[i+3];
  
}

