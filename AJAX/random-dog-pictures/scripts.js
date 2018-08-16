const btn = document.querySelector("#btn");
const img = document.querySelector("#photo");

btn.addEventListener("click", () => {
    const XHR = new XMLHttpRequest;

    XHR.onreadystatechange = () => {
        if (XHR.readyState == 4 && XHR.status == 200) {
            let url = JSON.parse(XHR.responseText).message;
            img.src = url;
        }
    }

    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send();
})