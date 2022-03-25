let strRadius = "20";
var can = document.getElementById("canvas");
let w = can.clientWidth;
let h = can.clientHeight;
//var map = document.getElementById("mapOne");
//map.areas[0].setAttribute("coords",(""+(w/2)+","+(h/2)+","+strRadius));
var con = can.getContext("2d");
let imgData = con.getImageData(0,0,can.width,can.height);
let data = imgData.data;
let red = 0;
let green = 0;
let blue = 0;
let coords = [][]
let count = 0;
for (let i = 0; i < data.length; i+=4){
  red = data[i];
  green = data[i+1];
  blue = data[i+2];
  if (red === green && green === blue && red === 255) {
    //this is a clickable area
    coords[count] = [(i/4)%can.width,(i/4)/can.width]; 
  }
}

