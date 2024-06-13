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

// Constructor function
function Student(name, age) {
  this.name = name;
  this.age = age;
}

// Objects
var stu1 = new Student("gfg1", 25);
var stu2 = new Student("gfg2", 42);

// Prototype
Student.prototype.getName = function () {
  return this.name;
};

// Function have property prototype
// Student

// Function call using object
stu1.getName();

// Constructor function
function Student(name, age) {
  this.name = name;
  this.age = age;
}

// Objects
var stu1 = new Student("gfg1", 25);
var stu2 = new Student("gfg2", 42);

// Prototype
Student.prototype.getName = function () {
  return this.name;
};

// Function have property prototype
// Student

// function call using object
stu1.getName();

// Access prototype
Student.prototype;
