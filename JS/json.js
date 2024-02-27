// JavaScript Object Notion====>json full ming
// 1-->JSON.stringify(person);
// 2-->JSON.parse(json);
const person = {
  name: "shohel",
  id: 50,
  salrey: 500,
  company: {
    name: "ph company",
    address: {
      strect: 45,
      by: "dhaka",
    },
  },
  array: ["Laptop", "Calculator", "Mac Book", "Electronic Etc"],
};
console.log(person); ///js file
const json = JSON.stringify(person);
console.log(json); // json file
const objConvertJSON = JSON.parse(json);
console.log(objConvertJSON);
