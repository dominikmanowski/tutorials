const XHR = new XMLHttpRequest();
const zen = document.querySelector(".zen");

XHR.onreadystatechange = function () {
    if (XHR.readyState == 4) {
        if (XHR.status == 200) {
            zen.textContent = XHR.responseText;
        } else {
            console.log("Something went wrong!");
        }
    }
}

XHR.open("GET", "https://api.github.com/zen");
XHR.send();
