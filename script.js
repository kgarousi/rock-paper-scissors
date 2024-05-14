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

function getHumanChoice(){
    return window.prompt("Rock Paper or Scissors? ");
}


function playRound(humanSelection, computerSelection){


    if(humanSelection == "rock" && computerSelection == "paper"){
        console.log("Paper beats rock, you lose!");
        computerScore++;
    }
    else if(humanSelection == "paper" && computerSelection == "scissors"){
        console.log("Scissors beat paper, you lose!");
        computerScore++;
    }
    else if(humanSelection == "scissors" && computerSelection == "rock"){
        console.log("Rock beats scissors, you lose!");
        computerScore++;
    }
    else if(humanSelection == "scissors" && computerSelection == "paper"){
        console.log("Scissors beats paper, you win!");
        humanScore++;
    }
    else if(humanSelection == "paper" && computerSelection == "rock"){
        console.log("Paper beats rock, you win!");
        humanScore++;
    }
    else if(humanSelection == "rock" && computerSelection == "scissors"){
        console.log("Rock beats scissors, you win!");
        humanScore++;
    }
    else{
        console.log("You both picked the same, it's a tie!");
    }
}


function playGame(){
    
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){    
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
     }

    function playRound(humanSelection, computerSelection){


        if(humanSelection == "rock" && computerSelection == "paper"){
            console.log("Paper beats rock, you lose!");
            computerScore++;
        }
        else if(humanSelection == "paper" && computerSelection == "scissors"){
            console.log("Scissors beat paper, you lose!");
            computerScore++;
        }
        else if(humanSelection == "scissors" && computerSelection == "rock"){
            console.log("Rock beats scissors, you lose!");
            computerScore++;
        }
        else if(humanSelection == "scissors" && computerSelection == "paper"){
            console.log("Scissors beats paper, you win!");
            humanScore++;
        }
        else if(humanSelection == "paper" && computerSelection == "rock"){
            console.log("Paper beats rock, you win!");
            humanScore++;
        }
        else if(humanSelection == "rock" && computerSelection == "scissors"){
            console.log("Rock beats scissors, you win!");
            humanScore++;
        }
        else{
            console.log("You both picked the same, it's a tie!");
        }
    }

    if(humanScore < computerScore){
        console.log("Player score: " + humanScore + " Computer score: " + computerScore + " You lost the game!");
    }
    else if(humanScore > computerScore){
        console.log("Player score: " + humanScore + " Computer score: " + computerScore +  " You won the game!");
    }
    
    else if(humanScore == computerScore){
        console.log("Player score: " + humanScore + " Computer score: " + computerScore + " It's a tie!");
    }
}

playGame();