let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn");
let mgsContainer = document.querySelector(".msg-container");

let turn0 = true;

let winningPat = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
            box.style.color = "lightgreen"
        } else {
            box.innerText = "X";
            turn0 = true
            box.style.color = "lightblue"
        }
        box.disabled = true;

        checkWinner ();
    });
});

const resetGame = () => {
    turn0 = true;
    boxesEnabled ();
    mgsContainer.classList.add("hide");
}

const boxesDisabled = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const boxesEnabled = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congrats, "${winner}" is the winner.`;
    mgsContainer.classList.remove("hide");
    boxesDisabled ();
}

const checkWinner = () => {
    for (let pat of winningPat) {
        let pos1Val = boxes[pat[0]].innerText;
        let pos2Val = boxes[pat[1]].innerText;
        let pos3Val = boxes[pat[2]].innerText;
        
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log ("winner is", pos1Val);

               showWinner(pos1Val);
    }
}
 }};    

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);