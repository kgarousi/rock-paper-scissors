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
        console.log("You both chose " + cpuChoice + ", it's a tie");
    }
    else if(cpuChoice == "Rock"  && playerChoice == "Paper"){
        console.log("Paper covers rock, you win!");
    }
    else if(cpuChoice == "Paper"  && playerChoice == "Rock"){
        console.log("Paper covers rock, you lose");
    }
    else if(cpuChoice == "Scissors"  && playerChoice == "Rock"){
        console.log("Rock beats scissors, you win!");
    }
    else if(cpuChoice == "Rock"  && playerChoice == "Scissors"){
        console.log("Rock beats scissors, you lose");
    }
    else if(cpuChoice == "Scissors"  && playerChoice == "Paper"){
        console.log("Scissors cuts paper, you lose");
    }
    else if(cpuChoice == "Paper"  && playerChoice == "Scissors"){
        console.log("Paper covers rock, you win!");
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
                playRound("Scissors")
            }
        });
    });
}
