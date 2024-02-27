// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

function addClickButton() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
}
