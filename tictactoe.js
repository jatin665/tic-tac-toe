const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const cells = document.querySelectorAll('.cell');
const xArr = [];
const oArr = [];
const gameBox = document.querySelector('.game-box');
gameBox.addEventListener('click', changeTurn);

function changeTurn(event) {
    const cell = event.target;
    const xClicked = this.classList.contains('turn-x');
    const oClicked = this.classList.contains('turn-o');
    if (cell.classList.contains('x') || cell.classList.contains('o')) {
        return;
    }
    if (oClicked) {
        cell.classList.add('o');
        // Toggling classes for hovering effect and switching turns
        this.classList.remove('turn-o');
        this.classList.add('turn-x');
    } else {
        cell.classList.add('x');
        // Toggling classes for hovering effect and switching turns
        this.classList.remove('turn-x');
        this.classList.add('turn-o');
    }
    this.classList.remove('o');
    this.classList.remove('x');
    let winner ;
    checkProgress(xClicked ? 'x' : 'o');
}

function checkProgress(turn) {
    if (checkWinner(turn)) {
        alert(`${turn} won the game`);
        restart();
        return;
    } else {
        if (checkDraw()) {
            alert(`Match Draw`);
            restart();
        }
    }
}
function checkWinner(currentTurn) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentTurn);
        })
    })
}
function checkDraw() {
    const arr = [...cells];
    return arr.every(cell => cell.classList.contains('x') || cell.classList.contains('o'));
}
function restart() {
    cells.forEach(cell => {
        cell.classList.remove('x');
        cell.classList.remove('o');
    });
    gameBox.classList.remove('turn-x');
    gameBox.classList.add('turn-o');
}