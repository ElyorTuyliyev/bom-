// function person(name) {
//   console.log(`hello ${name}`);
// }
// person("Hasanboy");
// // function  declaration

// var person1 = function (name) {
//   console.log(`hello ${name}`);
// };

// person1("ey");

// function  expration

// const hello = (name) => {
//   console.log(`hello ${name}`);
// };

// hello("tim");

// const obj = {
//   name: "Elyor",
//   age: 10,
//   city: "jizzax",
//   info: () => {
//     console.log(this);
//   },
// };

// obj.info();

const myAge = (age = 10, name = "gamma") => {
  console.log(name + age);
};

myAge("betta", 100);
