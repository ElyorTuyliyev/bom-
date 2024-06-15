let imgsWrapper = document.getElementById("imgs__wrapper");
let link = document.getElementById("imgLink");
let imgGet = JSON.parse(localStorage.getItem("link"));
console.log(imgGet);

function imgs() {
  localStorage.setItem("link", JSON.stringify(link.value));
}

for (let i = 0; i < imgGet.length; i++) {
  imgsWrapper.innerHTML += `<img class = 'imgs' src="${imgGet}" alt="">
  `;
}
