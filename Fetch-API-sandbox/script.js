const getTextBtn = document.getElementById("get-text");
const getUsersBtn = document.getElementById("get-users");
const getPostsBtn = document.getElementById("get-posts");
const addPostBtn = document.getElementById("add-post");

const output = document.getElementById("output");



getTextBtn.addEventListener("click", getText);

function getText() {
    fetch("sample.txt")
        .then(res => res.text())
        .then(data => output.innerHTML = `<p>${data}</p>`)
        .catch(err => console.log(err))
}

getUsersBtn.addEventListener("click", getUsers);

function getUsers() {
    fetch("users.json")
        .then(res => res.json())
        .then(data => {
            let usersOutput = `<h3 class="mb-4 h3">Users:</h3>`;
            data.forEach(user => {
                usersOutput +=
                `<ul class="list-group mb-4">
                    <li class="list-group-item">ID: ${user.id}</li>
                    <li class="list-group-item">Name: ${user.name}</li>
                    <li class="list-group-item">Email: ${user.email}</li>
                </ul>`
            });
            
        output.innerHTML = usersOutput;
            
        })
    }
    
getPostsBtn.addEventListener("click", getPosts);

function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            let postsOutput = `<h2 class"h2 mb-4">Posts:</h2>`;
            data.forEach(post => {
                postsOutput +=
                `<div class="card card-body mb-3">
                    <h4 class="h4">${post.title.toUpperCase()}</h4>
                    <p>${post.body}</p>
                </div>
                `
            });

        output.innerHTML = postsOutput;
    })
}

addPostBtn.addEventListener("submit", addPost);

function addPost(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain */*",
            "Content-type": "application/json"
        },
        body:JSON.stringify({title, body})
    })
    .then(res => res.json())
    .then(data => console.log(data))

}