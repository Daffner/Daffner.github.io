let strRadius = "20";
var img = document.getElementById("img1");
let w = img.clientWidth;
let h = img.clientHeight;
var map = document.getElementById("map1");
//let coords = p1.getAttribute("coords");
//p1.setAttribute("coords",(""+(w/2)+","+(h/2)+","+radius));

map.areas[0].coords = ""+(w/2)+","+(h/2)+","+radius;
