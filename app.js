const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetBtn = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#play-to');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

//PICK WINNING SCORE
winningScoreSelect.addEventListener('change', (e) => {
    winningScore = parseInt(e.target.value);
    resetScore();
});

//RESETTING THE SCORE
function resetScore() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}

resetBtn.addEventListener('click', resetScore);

//CONTROL BUTTONS
p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.textContent = p2Score;
    }
});



