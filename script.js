game();
let playerScore = 0;
let cpuScore = 0;
function computerPlay(){
    let opponentChoice = getRandomNumber(3)
    if(opponentChoice == 0){
        return "Rock";
    }
    else if(opponentChoice == 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}
function playRound(playerChoice){
    let cpuChoice =  computerPlay();
    const container = document.querySelector('#container');
    const playerDisplay = document.createElement('h3');
    const computerDisplay = document.createElement('h3');
    const results = document.createElement('h3');
    const score = document.createElement('h3');
    if(cpuChoice == playerChoice){
        playerDisplay.textContent = "Player choice: " + playerChoice;
        computerDisplay.textContent = "Computer choice: " + cpuChoice;
        results.textContent = "You both chose " + playerChoice + ", it's a tie ";
        score.textContent = "Player Score: " + playerScore + " Computer Score: " + cpuScore;
    }
   else if(cpuChoice == "Rock"  && playerChoice == "Paper"){
        playerScore++;
        playerDisplay.textContent = "Player choice: " + playerChoice;
        computerDisplay.textContent = "Computer choice: " + cpuChoice;
        results.textContent = "Paper covers rock, you win!";
        score.textContent = "Player Score: " + playerScore + " Computer Score: " + cpuScore;
    }
    else if(cpuChoice == "Paper"  && playerChoice == "Rock"){
        cpuScore++;
        playerDisplay.textContent = "Player choice: " + playerChoice;
        computerDisplay.textContent = "Computer choice: " + cpuChoice;
        results.textContent = "Paper covers rock, you lose!";
        score.textContent = "Player Score: " + playerScore + " Computer Score: " + cpuScore;
    }
    else if(cpuChoice == "Scissors"  && playerChoice == "Rock"){
        playerScore++;
        console.log(playerScore)
        playerDisplay.textContent = "Player choice: " + playerChoice;
        computerDisplay.textContent = "Computer choice: " + cpuChoice;
        results.textContent = "Rock beats scissors, you win!";
        score.textContent = "Player Score: " + playerScore + " Computer Score: " + cpuScore;
    }   
    else if(cpuChoice == "Rock"  && playerChoice == "Scissors"){
        cpuScore++;
        playerDisplay.textContent = "Player choice: " + playerChoice;
        computerDisplay.textContent = "Computer choice: " + cpuChoice;
        results.textContent = "Rock beats scissors, you lose";
        score.textContent = "Player Score: " + playerScore + " Computer Score: " + cpuScore;
    }
    else if(cpuChoice == "Scissors"  && playerChoice == "Paper"){
        cpuScore++;
        playerDisplay.textContent = "Player choice: " + playerChoice;
        computerDisplay.textContent = "Computer choice: " + cpuChoice;
        results.textContent = "Scissors beats paper, you lose";
        score.textContent = "Player Score: " + playerScore + " Computer Score: " + cpuScore;
    }
    else if(cpuChoice == "Paper"  && playerChoice == "Scissors"){
        playerScore++;
        playerDisplay.textContent = "Player choice: " + playerChoice;
        computerDisplay.textContent = "Computer choice: " + cpuChoice;
        results.textContent = "Scissors beats paper, you win! ";
        score.textContent = "Player Score: " + playerScore + " Computer Score: " + cpuScore;
    }
    container.appendChild(playerDisplay);
    container.appendChild(computerDisplay);
    container.appendChild(results);
    container.appendChild(score);
}
function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}
function game(){
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(button.id == "rockbtn"){
                playRound("Rock");
            }
            else if(button.id == "paperbtn"){
                playRound("Paper");
            }
            else if(button.id == "scissorbtn"){
                playRound("Scissors");
            }
        });
    });
}
