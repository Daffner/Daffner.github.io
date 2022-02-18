const pageHeading = document.querySelector('h1');
let str = document.cookie;
alert(document.cookie);
pageHeading.textContent = "Hello world 2";
document.cookie = "testCookie=test";
alert(document.cookie);
