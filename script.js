let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document. querySelector("#scissors");
const round = document.querySelector(".round")

function getComputerChoice(){
    let computerChoice =  Math.floor(Math.random() * 3)

    switch (computerChoice){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break; 
    }
}
    rockBtn.addEventListener("click", function () {
        roundCounter++;
        round.textContent = "Rounds played: " + roundCounter;    
        playGame("rock", getComputerChoice());
    });
    
    
    paperBtn.addEventListener("click", function () {
        roundCounter++;
        round.textContent = "Rounds played: " + roundCounter;
        playGame("paper", getComputerChoice());
          
    });
    
    
    scissorsBtn.addEventListener("click", function () {
        roundCounter++;
        round.textContent = "Rounds played: " + roundCounter;
        playGame("scissors", getComputerChoice());
    });



function playGame(humanSelection, computerSelection){
    const playerScoreEl = document.getElementById("human-score");
    const computerScoreEl = document.getElementById("computer-score");
    const playerChoice = document.querySelector("#player-choice");
    const computerChoice = document.querySelector("#computer-choice");
    const results = document.querySelector("#results");

    playerChoice.textContent = "Player choice: " + humanSelection;
    computerChoice.textContent = "Computer choice: " + computerSelection;

    if(humanSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        playerScoreEl.textContent = "Player score: " + humanScore ;
        computerScoreEl.textContent = " Computer score: " + computerScore;
        results.textContent = "Paper beats rock, you lose!"
        if(computerScore == 5){
            endGame();
        }
    }
    else if(humanSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        playerScoreEl.textContent = "Player score: " + humanScore ; 
        computerScoreEl.textContent = " Computer score: " + computerScore;
        results.textContent = "Scissors beats paper, you lose!";
        if(computerScore == 5){
            endGame();
        }
    }
    else if(humanSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        playerScoreEl.textContent = "Player score: " + humanScore;
        computerScoreEl.textContent = " Computer score: " + computerScore;
        results.textContent = "Rock beats scissors, you lose! "
        if(computerScore == 5){
            endGame();
        }
    }
    else if(humanSelection == "scissors" && computerSelection == "paper"){
        humanScore++;
        playerScoreEl.textContent = "Player score: " + humanScore;
        computerScoreEl.textContent = " Computer score: " + computerScore;
        results.textContent = "Scissors beats paper, you win!";
        if(humanScore == 5){
            endGame();
        }
    }
    else if(humanSelection == "paper" && computerSelection == "rock"){
        humanScore++;
        playerScoreEl.textContent = "Player score: " + humanScore;
        computerScoreEl.textContent = " Computer score: " + computerScore;
        results.textContent = "Paper beats rock, you win! ";
        if(humanScore == 5){
            endGame();
        }
    }
    else if(humanSelection == "rock" && computerSelection == "scissors"){
        humanScore++;
        playerScoreEl.textContent = "Player score: " + humanScore;
        computerScoreEl.textContent = " Computer score: " + computerScore;
        results.textContent = "Rock beats scissors, you win!";
        if(humanScore == 5){
            endGame();
        }
    }
    else if(humanSelection == computerSelection){
        results.textContent =  "You both picked the same, it's a tie!";
    }
}

function endGame(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    const winner = document.querySelector("#winner")
    if(humanScore > computerScore){
        winner.textContent = "Congrats! you won the game. "
    }
    else{
        winner.textContent = "Sorry you lost, you're really bad! "
    }
}

const  newGameBtn = document.querySelector(".new-game")

newGameBtn.addEventListener("click", function () {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    const playerScoreEl = document.getElementById("human-score");
    const computerScoreEl = document.getElementById("computer-score");
    const playerChoice = document.querySelector("#player-choice");
    const computerChoice = document.querySelector("#computer-choice");
    const results = document.querySelector("#results");
    const winner = document.querySelector("#winner");
    playerScoreEl.textContent = "Player score: 0"
    computerScoreEl.textContent = "Computer score: 0"
    playerChoice.textContent ="";
    computerChoice.textContent="";
    results.textContent="";
    winner.textContent="";
    round.textContent="Rounds played: 0"
    roundCounter = 0;
    humanScore = 0;
    computerScore = 0;
})