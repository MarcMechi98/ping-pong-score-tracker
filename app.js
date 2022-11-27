const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetBtn = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#play-to');

let winningScore = 3;
let isGameOver = false;


// UPDATE THE SCORE
function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


//CONTROL BUTTONS
p1.button.addEventListener('click', () => {
    updateScore(p1, p2);
});

p2.button.addEventListener('click', () => {
    updateScore(p2, p1);
});


//PICK WINNING SCORE
winningScoreSelect.addEventListener('change', e => {
    winningScore = parseInt(e.target.value);
    resetScore();
});


//RESETTING THE SCORE
function resetScore() {
    isGameOver = false;
    for (let player of [p1, p2]) {
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove('has-text-success', 'has-text-danger');
        player.button.disabled = false;
    }
}

resetBtn.addEventListener('click', resetScore);





