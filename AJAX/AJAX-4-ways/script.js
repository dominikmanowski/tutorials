const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const xhrBtn = document.querySelector("#xhr");
const fetchBtn = document.querySelector("#fetch");
// const jqueryBtn = document.querySelector("#jquery");
const axiosBtn = document.querySelector("#axios");
const display = document.querySelector("#quote")

xhrBtn.addEventListener("click", function() {
    const XHR = new XMLHttpRequest;

    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 && XHR.status == 200) {
            quote = JSON.parse(XHR.responseText)[0];
            display.innerText = quote;
        }
    }

    XHR.open("GET", url)
    XHR.send()
})

fetchBtn.addEventListener("click", () => {
    fetch(url)
        .then(res => res.json())
        .then(data => display.innerText = data[0])
        .catch(err => console.log(err))
})

$('#jquery').click(function () {
    $.getJSON(url)
        .done(function (data) {
            $('#quote').text(data[0]);
        });
});

axiosBtn.addEventListener("click", () => {
    axios.get(url)
    .then(res => display.innerText = res.data[0])
    .catch(err => console.log(err));
})