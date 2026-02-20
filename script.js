const dialogN = document.getElementById('nameInput');
const dialogS = document.getElementById("startGame");
const btn_game = document.querySelector('.game');
const btn_startGame = document.querySelector('.startGame');
const box = document.querySelectorAll(".box");
const turn = document.querySelector('.turn');
const btn_resetBoard = document.querySelector('.reset.Board');
const btn_resetScore = document.querySelector('.reset.Score');
const p1ScoreT = document.querySelector('.p1Score');
const p2ScoreT = document.querySelector('.p2Score');
let p1Turn = true;
let p1Score = 0;
let p2Score = 0;

console.log(box);


document.addEventListener("DOMContentLoaded", () =>
    {dialogS.showModal();}
);

btn_game.addEventListener("click", () => {
    dialogS.close();
    dialogN.showModal();} );


btn_startGame.addEventListener("click", () => 
    {dialogN.close();
    const p1Name = document.getElementById("playerOne").value;
    const p2Name = document.getElementById("playerTwo").value;
    const p1Area = document.querySelector(".player.oneP");
    const p2Area = document.querySelector(".player.twoP");
    gameController();
    if (p1Name)
    {p1Area.textContent = `${p1Name} - P1 : X`;};
    if (p2Name)
    {p2Area.textContent = `${p2Name} - P2 :  O`;};
    }
);

function gameController(){
for (const b of box)
    { b.addEventListener("click", (b) => {
        
        const num = b.target.getAttribute("value").value;

    if (p1Turn == true)
        {p1Turn = false;
        b.target.textContent = "X";
        turn.textContent = "Player 2 Turn";
        checkWinner();
        b.target.style.pointerEvents = "none"; }
    else
        {p1Turn = true;
        b.target.textContent = "O";
        turn.textContent = "Player 1 Turn";
        checkWinner();
        b.target.style.pointerEvents = "none";}    

})};
};



function resetBoard() {
    box.forEach(box => {
        box.textContent = ""
        box.style.pointerEvents = "auto";
        turn.textContent="Player 1 Turn"
    })

}; 

const resetScore = () =>{
    p1Turn = true;
    p1ScoreT.textContent = "0";
    p2ScoreT.textContent = "0";
    p1Score = 0;
    p2Score = 0;
    resetBoard();
}


const resetGame = () => {
    p1Turn = true;
    resetBoard();
    
};

btn_resetScore.addEventListener('click', resetScore);
btn_resetBoard.addEventListener('click', resetGame);

 
const winning_combinations = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6],[1,4,7], [2,5,8] , [0,4,8], [2,4,6]];

function checkWinner() {
    for (let pattern of winning_combinations) {
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;
        console.log(pos3);
        
        const tie = [...box].every(b => b.textContent !=="");
        console.log(tie);
        if ((pos1 == pos2) && (pos1==pos3) &&(pos1 !== ""))
        {        
        if (pos1 == ("X")) {
            turn.textContent = "Player One Wins";
            p1Score ++;
            p1ScoreT.textContent = p1Score;           }
           else {
            turn.textContent = "Player Two Wins";
            p2Score ++;
            p2ScoreT.textContent = p2Score;    
           }}
        else if ((pos1 !== pos2) && (tie))
            {turn.textContent = "Tie";
                console.log(box);
            }   
    }}








