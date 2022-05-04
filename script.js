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
     let cpuChoice =   computerPlay();
    
    console.log("Player's choice: " + playerChoice);
    console.log("Opponent's choice: " + cpuChoice);
    
    if(cpuChoice == playerChoice){
        return("You both chose " + cpuChoice + ", it's a tie");
    }
    else if(cpuChoice == "Rock"  && playerChoice == "Paper"){
        return("Paper covers rock, you win!");
    }
    else if(cpuChoice == "Paper"  && playerChoice == "Rock"){
        return("Paper covers rock, you lose");
    }
    else if(cpuChoice == "Scissors"  && playerChoice == "Rock"){
        return("Rock beats scissors, you win!");
    }
    else if(cpuChoice == "Rock"  && playerChoice == "Scissors"){
        return("Rock beats scissors, you lose");
    }
    else if(cpuChoice == "Scissors"  && playerChoice == "Paper"){
        return("Scissors cuts paper, you lose");
    }
    else if(cpuChoice == "Paper"  && playerChoice == "Scissors"){
        return("Paper covers rock, you win!");
    }
}
function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}
function game(){
    const buttons = document.querySelectorAll('button');
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content')

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(button.id == "rockbtn"){
                content.textContent = playRound("Rock");
                container.appendChild(content);
            }
            else if(button.id == "paperbtn"){
                content.textContent = playRound("Paper");
                container.appendChild(content);
            }
            else if(button.id == "scissorbtn"){
                content.textContent = playRound("Scissors");
                container.appendChild(content);
            }
        });
    });
}
