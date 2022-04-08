let strRadius = "20";
var can = document.getElementById("canvas");
let w = can.clientWidth;
let h = can.clientHeight;
//var map = document.getElementById("mapOne");
//map.areas[0].setAttribute("coords",(""+(w/2)+","+(h/2)+","+strRadius));
var con = can.getContext("2d");
let imgData = con.getImageData(0,0,can.width,can.height);
var data = imgData.data;
let red = 0;
let green = 0;
let blue = 0;
//2d array
var coords = []
let count = 0;
for (let i = 0; i < data.length; i+=4){
  red = data[i];
  green = data[i+1];
  blue = data[i+2];
  //console.log(red + ", " + green + ", "+ blue + "\n");
  if (red >= 240 && green >= 240 && blue >= 240) {
    //this is a clickable area
    coords.push([(i/4)%can.width,(i/4)/can.width]); 
    count++;
    //if this works we should have the issue of too many buttons on a point
  }
}

for (let j = 0; j < coords.length; j++) {
  let but = document.createElement("BUTTON");
  but.setAttribute("style","z-index:2; position:absolute; top:"+coords[j][0]+"; left:"+coords[j][1]);
}
