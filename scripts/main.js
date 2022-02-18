const pageHeading = document.querySelector('h1');
var str = document.cookie;
alert(document.cookie);
pageHeading.textContent = "Hello world 2";
document.cookie = "testCookie=test";
//alert(document.cookie);
