var canvas = document.getElementById("canvas");

var c = canvas.getContext("2d");
var img = new Image();
img = document.getElementById("source");
canvas.setAttribute("width",1026);
canvas.setAttribute("height",1026);
img.onload = function(){
	
	c.drawImage(img,0,0);
};
