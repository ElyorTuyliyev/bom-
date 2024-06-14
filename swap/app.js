// let firstImage = null;
// let secondImage = null;
// img.addEventListener("click", (event) => {
//   if (!firstImage) {
//     firstImage = event.target;
//   } else if (!secondImage) {
//     secondImage = event.target;
//     const firstImg = firstImage.src;
//     firstImage.src = secondImage.src;
//     secondImage.src = firstImg;
//     firstImage = null;
//     secondImage = null;
//   }
// });

class User {
  constructor(name) {
    this.name = name;
  }
}

class Doctor extends User {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

const b = new Doctor("Grdyr");
const ba = new User("Ggrgf");
Doctor.__proto__.getInfo = () => {
  console.log(this);
};
console.log(b, ba);
