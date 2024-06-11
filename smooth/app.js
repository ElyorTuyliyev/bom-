let scrollHeight = document.querySelector("body").scrollHeight / 3;
function smooth() {
  window.scrollTo({ top: scrollHeight, behavior: "smooth" });
}
