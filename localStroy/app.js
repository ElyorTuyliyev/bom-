let imgsWrapper = document.getElementById("imgs__wrapper");
let link = document.getElementById("imgLink");
let imgGet = JSON.parse(localStorage.getItem("link"));
let arr = [];
function imgs() {
  localStorage.setItem("link", JSON.stringify(link.value));
}

for (let i = 0; i < 2; i++) {
  imgsWrapper.innerHTML += `<img class = 'imgs' src="${imgGet}" alt="">
  `;
}
