var canvas = document.getElementById("canvas");

var c = canvas.getContext("2d");
var img = new Image();
img = document.getElementById("img1");
canvas.setAttribute("width",screen.availWidth);
canvas.setAttribute("height",screen.availHeight);
img.onload = function(){
	
	c.drawImage(img,0,0);
};
