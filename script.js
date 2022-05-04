game();
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

    if(cpuChoice == playerChoice){
        playerDisplay.textContent = "Player choice: " + playerChoice;
        computerDisplay.textContent = "Computer choice: " + cpuChoice;
        results.textContent = "You both chose " + playerChoice + ", it's a tie ";
        container.appendChild(playerDisplay);
        container.appendChild(computerDisplay);
        container.appendChild(results);
    }
   else if(cpuChoice == "Rock"  && playerChoice == "Paper"){
        playerDisplay.textContent = "Player choice: " + playerChoice;
        computerDisplay.textContent = "Computer choice: " + cpuChoice;
        results.textContent = "Paper covers rock, you win!";
        container.appendChild(playerDisplay);
        container.appendChild(computerDisplay);
        container.appendChild(results);
    }
    else if(cpuChoice == "Paper"  && playerChoice == "Rock"){
        playerDisplay.textContent = "Player choice: " + playerChoice;
        computerDisplay.textContent = "Computer choice: " + cpuChoice;
        results.textContent = "Paper covers rock, you lose!"
        container.appendChild(playerDisplay);
        container.appendChild(computerDisplay);
        container.appendChild(results);
    }
    else if(cpuChoice == "Scissors"  && playerChoice == "Rock"){
        playerDisplay.textContent = "Player choice: " + playerChoice;
        computerDisplay.textContent = "Computer choice: " + cpuChoice;
        results.textContent = "Rock beats scissors, you win!";
        container.appendChild(playerDisplay);
        container.appendChild(computerDisplay);
        container.appendChild(results);
    }   
    else if(cpuChoice == "Rock"  && playerChoice == "Scissors"){
        playerDisplay.textContent = "Player choice: " + playerChoice;
        computerDisplay.textContent = "Computer choice: " + cpuChoice;
        results.textContent = "Rock beats scissors, you lose";
        container.appendChild(playerDisplay);
        container.appendChild(computerDisplay);
        container.appendChild(results);
    }
    else if(cpuChoice == "Scissors"  && playerChoice == "Paper"){
        playerDisplay.textContent = "Player choice: " + playerChoice;
        computerDisplay.textContent = "Computer choice: " + cpuChoice;
        results.textContent = "Scissors beats paper, you lose";
        container.appendChild(playerDisplay);
        container.appendChild(computerDisplay);
        container.appendChild(results);
    }
    else if(cpuChoice == "Paper"  && playerChoice == "Scissors"){
        playerDisplay.textContent = "Player choice: " + playerChoice;
        computerDisplay.textContent = "Computer choice: " + cpuChoice;
        results.textContent = "Scissors beats paper, you win! ";
        container.appendChild(playerDisplay);
        container.appendChild(computerDisplay);
        container.appendChild(results);
    }
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
