
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

function playGame(){
    
    let humanScore = 0;
    let computerScore = 0;

    
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
    button.addEventListener("click", () => {
    results.textContent =  playRound(button.id, getComputerChoice());
        });
    });
    
   
    function playRound(humanSelection, computerSelection){

        if(humanSelection == "rock" && computerSelection == "paper"){
            computerScore++;
            return "Paper beats rock, you lose!";
        }
        else if(humanSelection == "paper" && computerSelection == "scissors"){
            computerScore++;
            return "Scissors beat paper, you lose!";
        }
        else if(humanSelection == "scissors" && computerSelection == "rock"){
            
            computerScore++;
            return "Rock beats scissors, you lose!";
        }
        else if(humanSelection == "scissors" && computerSelection == "paper"){
            humanScore++;
            return "Scissors beats paper, you win!";
        }
        else if(humanSelection == "paper" && computerSelection == "rock"){
            humanScore++;
            return "Paper beats rock, you win!";
        }
        else if(humanSelection == "rock" && computerSelection == "scissors"){
            humanScore++;
            return "Rock beats scissors, you win!";
        }
        else{
            return "You both picked the same, it's a tie!";
        }
       results.textContent = getScore(humanScore, computerScore)
    }
     function getScore(humanScore, computerScore){    
        if(humanScore < 5 || computerScore < 5){  
            if(humanScore < computerScore){
                    return "Player score: " + humanScore + " Computer score: " + computerScore + " You lost the round!";
                }
                else if(humanScore > computerScore){
                    return "Player score: " + humanScore + " Computer score: " + computerScore +  " You won the game!";
                }
                
                else if(humanScore == computerScore){
                    return "Player score: " + humanScore + " Computer score: " + computerScore + " It's a tie!";
                }
        } 
        displayResults(humanScore, computerScore)   
    }

    function displayResults(humanScore, computerScore){
        if(humanScore == 5){
            console.log("The game is over, you won! Final Score: You: " + humanScore + " Computer Score: " + computerScore);
        }
        else if(computerScore == 5){
            console.log("The game is over, you lost :(. Final Score: You: " + humanScore + " Computer Score: " + computerScore);
        }
    }
}
playGame();