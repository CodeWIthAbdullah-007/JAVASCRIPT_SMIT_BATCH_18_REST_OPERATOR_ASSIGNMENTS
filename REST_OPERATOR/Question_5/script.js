let student = { name: "Ali", age: 20, class: "JS", city: "Karachi" };
let { name, ...rest } = student;
console.log(name);
console.log(rest);
