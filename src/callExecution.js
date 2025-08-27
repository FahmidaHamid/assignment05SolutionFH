let callBtns = document.getElementsByClassName("call-btn");
let coinsLeft = document.getElementById("coins-left");
for (let callBtn of callBtns) {
  callBtn.addEventListener("click", (event) => {
    // let siblingTitle = event.target.parentNode;
    // console.log(siblingTitle);
    let coins = Number.parseInt(coinsLeft.innerText);
    if (coins > 0) {
      //update coin count
      coins = coins - 20;
      coinsLeft.innerText = coins;

      //update call history
      let parentUL = document.getElementById("call-list");
      //console.log(historyUL);
      let newChild = document.createElement("li");

      // alert message
      let node = event.target.parentNode.parentNode;
      let titleNode = node.querySelector(`#service-title`);

      let contactNode = node.querySelector(`#contact-no`);

      let msg =
        "কল যাচ্ছে " +
        titleNode.innerText +
        " কেন্দ্রে, এই নাম্বারেঃ " +
        contactNode.innerText +
        "...";
      let now = new Date();
      let time = now.toLocaleTimeString();
      //newNode innerText

      newChild.innerHTML =
        `<div class="w-0.9 h-[86px] m-2 p-4 rounded-lg bg-[#fafafa]"
              >
                <h1>` +
        titleNode.innerText +
        `</h1>
                <div class="flex text-center justify-between">
                  <p>` +
        contactNode.innerText +
        `</p>
                  <p>` +
        time +
        `</p>
                </div>
              </div>`;
      parentUL.appendChild(newChild);
      setTimeout(() => {
        alert(msg);
        //   window.location = "./";
        //   return;
      }, 5);
    } else {
      alert(
        "আপনার পর্যাপ্ত কয়েন নেই। দয়া করে কয়েন যোগ করুন। বি দ্রঃ প্রতি কলে ২০ কয়েন লাগবে।"
      );
    }
  });
}
