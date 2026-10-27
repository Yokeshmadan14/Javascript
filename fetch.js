fetch('https://jsonplaceholder.typicode.com/users/1')
.then(res => res.json())
.then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(res => res.json())
.then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(res => {
    if (res.ok)console.log("Request successful" , res.status);
    else console.log("Request failed" , res.status);
});

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res =>res.json())
.then(posts => {
    console.log('total :',posts.length);
    posts.forEach( p => console.log(p.title));
})

const userId = 2;
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then(res => res.json())
.then(user => console.log(user.name));