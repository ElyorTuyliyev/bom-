let imgsWrapper = document.getElementById("imgs__wrapper");
let link = document.getElementById("imgLink");
let imgGet = JSON.parse(localStorage.getItem("link"));
let arr = [];
function imgs() {
  localStorage.setItem("link", JSON.stringify(link.value));
}

imgsWrapper.innerHTML += `<img class = 'imgs' src="${imgGet}" alt="">
`;
