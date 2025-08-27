let heartCount = 0;

let btnHearts = document.getElementsByClassName("clickable-hearts");
let heartTotal = document.getElementById("heart-count");
for (let btnHeart of btnHearts) {
  btnHeart.addEventListener("click", () => {
    heartCount += 1;
    heartTotal.innerText = heartCount;
  });
}
