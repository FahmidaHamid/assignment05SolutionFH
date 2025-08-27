let parentUL = document.getElementById("call-list");
let clearBtn = document.getElementById("btn-clear");

clearBtn.addEventListener("click", () => {
  while (parentUL.firstChild) {
    parentUL.firstChild.remove();
  }
});
