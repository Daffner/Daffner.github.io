var texts = ["","","","","","","","",""];

function load20C(var i) {
  location.href = "Early1.html";
  var div = document.createElement('div');
  var text = document.createElement('p');
  text.innerHTML = texts[i];
  div.appendChild(text);
}
