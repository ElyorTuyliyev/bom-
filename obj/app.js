var user1 = { name: "user", age: 50, admin: false }; // obj constructor
var user1 = { name: "user", age: 50, admin: false };

function user(name, age, admin) {
  this.UserName = name;
  this.age = age;
  this.admin = admin;
}

let users = new user("Sattor", 10, true);
let users1 = new user("Bolta", 50, false);

console.log(users, users1);

function target(event) {
  console.log(event.target.tagName);
}
