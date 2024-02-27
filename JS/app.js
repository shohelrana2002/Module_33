function addClickButton2() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
}

function userProfile() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}

function displayUser(data) {
  console.log(data);
}
