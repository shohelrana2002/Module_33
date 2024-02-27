function button4() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => userLoad(data));
}
const ul = document.getElementById("user-name");
function userLoad(data) {
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
