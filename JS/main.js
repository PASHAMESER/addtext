let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let box = document.querySelectorAll(".box");
let darg = null;

btn.onclick = function () {
  if (inp.value !== "") {
    box[0].innerHTML += `<p class = "item" draggable"true" >${inp.value}</p>`;
    inp.value = "";
    inp.focus();
  }
  dragItem();
};

function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      darg = item;
      item.style.opacity = "0.5";
    });

    item.addEventListener("dragend", function () {
      darg = null;
      item.style.opacity = "1";
    });

    box.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.background = "#090";
        this.style.color = "#fff";
      });

      box.addEventListener("dragleave", function () {
        this.style.background = "#fff";
        this.style.color = "#000";
      });

      box.addEventListener("drop", function () {
        this.append(darg);
        this.style.background = "#fff";
        this.style.color = "#000";
      });
    });
  });
}
