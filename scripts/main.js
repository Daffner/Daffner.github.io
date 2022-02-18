const pageHeading = document.querySelector('h1');
pageHeading.textContent = "Hello world 2";
document.cookie = "testCookie=test";
const body = document.querySelector('body');
body.textContent = document.cookie;
