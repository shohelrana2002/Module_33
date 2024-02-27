function postClick() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => post(data));
}

function post(posts) {
  const ul = document.getElementById("ul-post");

  for (const post of posts) {
    console.log(post);
    const li = document.createElement("div");
    li.classList.add("post");
    li.innerHTML = `<h3>User Id: ${post.id}</h3>
                    <h4>Title: ${post.title}</h4>
                    <p>DESCRIPTION: ${post.body}</p>`;
    ul.appendChild(li);
  }
}
