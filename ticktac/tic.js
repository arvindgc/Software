let player = "X";
let winptn = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let boxes = document.querySelectorAll(".btn");
let winmsg = document.querySelector(".container");

console.log(boxes);
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (player === "X") {
      box.innerText = "X";
      player = "O";
    } else {
      box.innerText = "O";
      player = "X";
    }
    box.disabled = true;
    checkWinner();
  });
});

checkWinner = () => {
  for (let ptn of winptn) {
    let pos1 = boxes[ptn[0]].innerText;
    let pos2 = boxes[ptn[1]].innerText;
    let pos3 = boxes[ptn[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos2 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        document.querySelector("#winmsg").style.visibility = "visible";
        let winn = document.createElement("h2");
        winn.innerText = pos1;
        winn.setAttribute("id", "winame");
        document.querySelector("#winmsg").append(winn);
        for (let box of boxes) {
          box.disabled = true;
        }
      }
    }
  }
};

document.querySelector("#reset").addEventListener("click", () => {
  document.querySelector("#winmsg").style.visibility = "hidden";

  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
  let winrm = document.querySelector("#winame");
  winrm.remove();
});
