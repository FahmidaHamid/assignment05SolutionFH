let copyData = document.getElementById("copies");
let copyButtons = document.getElementsByClassName("copy-btn");
// console.log(copyButtons);
for (let copyButton of copyButtons) {
  copyButton.addEventListener("click", (event) => {
    event.preventDefault();
    let totalCopy = Number.parseInt(copyData.innerText) + 1;
    console.log(totalCopy);
    copyData.innerHTML =
      `<h1 class="text-lg font-extrabold text-white">` +
      totalCopy +
      ` Copies</h1>`;
    // copyData.innerHTML = totalCopy.toString() + " Copy";
    // copyData.appendChild(newNode);
  });
}
