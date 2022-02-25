var maxOpacity = 0.0;

chrome.storage.sync.get(['iframeOpacity'], function(result) { 
    maxOpacity = result.iframeOpacity / 100;
});

var wrapperDiv = document.createElement("div");
wrapperDiv.setAttribute('id', 'testify-extension-wrapper');

wrapperDiv.style.opacity = 0.0;

var mouseX;
var mouseY;

var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
if (!location.ancestorOrigins.contains(extensionOrigin)) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('id', 'testify-extension-iframe');
    // Must be declared at web_accessible_resources in manifest.json
    iframe.src = chrome.runtime.getURL('frame.html');
    wrapperDiv.appendChild(iframe);
}

function addElement() {
    const bodyTag = document.getElementsByTagName("BODY")[0];
    bodyTag.appendChild(wrapperDiv);
}

document.onkeydown = changePosition;

function changePosition(event) {
    event = event || window.event;
    if (event.keyCode == 115) {  // F4
        wrapperDiv.style.left = String(mouseX).concat("px");
        wrapperDiv.style.top = String(mouseY).concat("px");
    } else if (event.keyCode == 220) {  // backslash
        if (wrapperDiv.style.zIndex != -9999999) {
            wrapperDiv.style.zIndex = -9999999;
            wrapperDiv.style.opacity = 0;
        } else {
            wrapperDiv.style.zIndex = 9999999;
            wrapperDiv.style.opacity = maxOpacity;
        }
    } else if (event.keyCode == 189) {
        maxOpacity -= .01;
        wrapperDiv.style.opacity = maxOpacity;
        wrapperDiv.style.zIndex = 9999999;
    } else if (event.keyCode == 187) {
        maxOpacity += .01;
        wrapperDiv.style.opacity = maxOpacity;
        wrapperDiv.style.zIndex = 9999999;
    }
}

onmousemove = function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}

addElement();