let boxes = document.querySelectorAll(".box");
let restartBtn = document.querySelector(".restart");
let newGamebtn = document.querySelector(".new");

let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msgcontainer");

let scoreX = document.querySelector("#scoreX");
let scoreO = document.querySelector("#scoreO");

let turnO = true;
let gameOver = false;

let xScore = 0;
let oScore = 0;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (box.innerText !== "" || gameOver) return;

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        checkWinner();
    });
});

function checkWinner() {

    for (let pattern of winPatterns) {

        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if (p1 !== "" && p2 !== "" && p3 !== "") {

            if (p1 === p2 && p2 === p3) {

                gameOver = true;

                msg.innerText = p1 + " Wins!";
                msgContainer.classList.remove("hide");

                if (p1 === "X") {
                    xScore++;
                    scoreX.innerText = xScore;
                } else {
                    oScore++;
                    scoreO.innerText = oScore;
                }

                return;
            }
        }
    }

    let filled = true;

    boxes.forEach((box) => {
        if (box.innerText === "") {
            filled = false;
        }
    });

    if (filled) {
        gameOver = true;
        msg.innerText = "Match Draw";
        msgContainer.classList.remove("hide");
    }
}

restartBtn.addEventListener("click", resetGame);
newGamebtn.addEventListener("click",resetGame);

function resetGame() {

    boxes.forEach((box) => {
        box.innerText = "";
    });

    turnO = true;
    gameOver = false;

    msgContainer.classList.add("hide");
}