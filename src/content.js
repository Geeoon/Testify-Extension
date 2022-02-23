document.body.onload = addElement;

var wrapperDiv = document.createElement("div");
wrapperDiv.setAttribute('id', 'testify-extension-wrapper');
wrapperDiv.innerHTML = "TEST";

var mouseX;
var mouseY;

function addElement() {
    const bodyTag = document.getElementsByTagName("BODY")[0];
    bodyTag.appendChild(wrapperDiv);
}

document.onkeydown = changePosition;

function changePosition(event) {
    event = event || window.event;
    if (event.keyCode == 115) {  // F4
        wrapperDiv.style.left = 500;
        alert(wrapperDiv.style.left);
        wrapperDiv.style.top = 500;
    }
}
/*
onmousemove = function(e) {
    mouseX = e.clientX;
    mouseX = e.clientY;
}
*/