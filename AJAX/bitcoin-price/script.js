const price = document.querySelector("#price");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const XHR = new XMLHttpRequest;

    btn.addEventListener("click", () => {

        XHR.onreadystatechange = function () {
            if (XHR.readyState == 4 && XHR.status == 200) {
                let data = JSON.parse(XHR.responseText);
                price.textContent = `${data.bpi.EUR.rate} ${data.bpi.EUR.code}`;
            }
        }

    })

    const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
    XHR.open("GET", url);
    XHR.send();
});