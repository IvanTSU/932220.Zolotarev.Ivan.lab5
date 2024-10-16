var modal = document.getElementById('modal-news1');
var btn = document.getElementById("show-news1");

var modal_2 = document.getElementById('modal-news2');
var btn_2 = document.getElementById("show-news2");

var modal_3 = document.getElementById('modal-news3');
var btn_3 = document.getElementById("show-news3");

btn.onclick = function() {
  modal.style.display = "block";
}

btn_2.onclick = function() {
  modal_2.style.display = "block";
}

btn_3.onclick = function() {
  modal_3.style.display = "block";
}

window.onclick = function(e) {
  if (e.target == modal || event.target == modal_2 || event.target == modal_3) {
    modal.style.display = "none";
    modal_2.style.display = "none";
    modal_3.style.display = "none";
  }
}




// function displayMessage (msgText, msgType) {
//   var popap = document.querySelector("body");

//   var panel = document.createElement("div");
//   panel.setAttribute("class", "msgBox");
//   popap.appendChild(panel);

//   var msg = document.createElement("p");
//   msg.textContent = msgText;
//   panel.appendChild(msg);
// }

// var btn = document.querySelector("button");
// btn.onclick = function () {
//   displayMessage("Woo, this is a different message!");    //помещаем в анонимную фунцию для того чтобы она не вызывалась сразу
// };


// function(event) {                             onclick="t=event.target||event.srcElement; alert(t.className)" - в главный див html

//   // кросс-браузерно получить target
//   var t = event.target || event.srcElement

//   alert(t.className)
// }