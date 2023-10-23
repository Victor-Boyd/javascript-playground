// rock paper scissors
const rock = './assets/rock.svg'
const paper = './assets/paper.svg'
const scissors = './assets/scissors.svg'
const winOrLose = ["WIN", "LOSE", "TIE"]
const winOrLoseValue = document.getElementById('win-or-lose')
const streak = document.getElementById('streak-tracker')
let streakValue = 0;

// player values
const player = document.getElementById('player');
const computer = document.getElementById('computer');

// computer choices
const computerMoves = [rock, paper, scissors]
const randomNumber = Math.floor(Math.random() * 3)
const computerChoice = computerMoves[randomNumber]
// buttons 
const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
// player choice
let playerChoice = null


rockButton.addEventListener('click', function() {
    playerChoice = rock
    player.src = rock
    const randomNumber = Math.floor(Math.random() * 3)
    const computerChoice = computerMoves[randomNumber]
    console.log(computerChoice)
    switch (computerChoice) {
        case rock:
            computer.src = rock
            winOrLoseValue.querySelector('h1').textContent = winOrLose[2];
            break;
        case paper:
            computer.src = paper
            winOrLoseValue.querySelector('h1').textContent = winOrLose[1];
            streakValue = 0;
            streak.textContent = `streak: ${streakValue}`;
            break;
        case scissors:
            computer.src = scissors
            winOrLoseValue.querySelector('h1').textContent = winOrLose[0];
            streakValue += 1; 
            streak.textContent = `streak: ${streakValue}`; 
            break;
        default:
            streakValue = 0; 
            streak.textContent = `streak: ${streakValue}`;
    }
})

paperButton.addEventListener('click', function() {
    playerChoice = paper
    player.src = paper
    const randomNumber = Math.floor(Math.random() * 3)
    const computerChoice = computerMoves[randomNumber]
    switch (computerChoice) {
        case rock:
            computer.src = rock
            winOrLoseValue.querySelector('h1').textContent = winOrLose[0];
            streakValue += 1; 
            streak.textContent = `streak: ${streakValue}`;
            break;
        case paper:
            computer.src = paper
            winOrLoseValue.querySelector('h1').textContent = winOrLose[2];

            break;
        case scissors:

            computer.src = scissors
            winOrLoseValue.querySelector('h1').textContent = winOrLose[1];
            streakValue = 0;
            streak.textContent = `streak: ${streakValue}`;
            break;
        default:
            streakValue = 0; 
            streak.textContent = `streak: ${streakValue}`;
    }
})

scissorsButton.addEventListener('click', function() {
    playerChoice = scissors
    player.src = scissors
    const randomNumber = Math.floor(Math.random() * 3)
    const computerChoice = computerMoves[randomNumber]
    switch (computerChoice) {
        case rock:
            computer.src = rock
            winOrLoseValue.querySelector('h1').textContent = winOrLose[1];
            streakValue = 0;
            streak.textContent = `streak: ${streakValue}`;
            break;
        case paper:
            computer.src = paper
            winOrLoseValue.querySelector('h1').textContent = winOrLose[0];
            streakValue += 1; 
            streak.textContent = `streak: ${streakValue}`;
            break;
        case scissors:
            computer.src = scissors
            winOrLoseValue.querySelector('h1').textContent = winOrLose[2];
            break;
        default:
            streakValue = 0;
            streak.textContent = `streak: ${streakValue}`;
    }
})