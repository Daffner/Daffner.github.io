const pageHeading = document.querySelector('h1');
pageHeading.textContent = "Hello world 2";
document.cookie = "testCookie=test";
alert(document.cookie);
