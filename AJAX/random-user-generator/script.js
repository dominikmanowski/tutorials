const url = "https://randomuser.me/api/";
const fullnameDisp = document.querySelector("#fullname");
const avatar = document.querySelector("#avatar");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const city = document.querySelector("#city");

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(displayErrors);
})

function handleErrors() {
    if(!res.ok) {
        throw Error(res.status);
    }

    return res
}

function parseJSON (res) {
    return res.json().then(data => data.results[0])
}

function updateProfile(data) {
    let fullname = `${data.name.first} ${data.name.last}`;
    fullnameDisp.innerText = fullname;
    avatar.src = data.picture.medium;
    username.innerText = data.login.username;
    email.innerText = data.email
    city.innerText = data.location.city;
}

function displayErrors (err) {
    console.log(err)
}