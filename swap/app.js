let box1 = null;
let box2 = null;
div.addEventListener("click", (event) => {
  if (!box1) {
    box1 = event.target;
  } else if (!box2) {
    box2 = event.target;
    const box1 = box1.src;
    box1.src = box2.src;
    box2.src = box1;
    box1 = null;
    box2 = null;
  }
});
