
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

        const score = document.querySelector("#score");

        if(humanSelection == "rock" && computerSelection == "paper"){
            computerScore++;
            score.textContent = getScore(humanScore, computerScore);
            return "Paper beats rock, you lose!";
        }
        else if(humanSelection == "paper" && computerSelection == "scissors"){
            computerScore++;
            score.textContent = getScore(humanScore, computerScore);
            return "Scissors beat paper, you lose!";
        }
        else if(humanSelection == "scissors" && computerSelection == "rock"){
            
            computerScore++;
            score.textContent = getScore(humanScore, computerScore);
            return "Rock beats scissors, you lose!";
        }
        else if(humanSelection == "scissors" && computerSelection == "paper"){
            humanScore++;
            score.textContent = getScore(humanScore, computerScore);
            return "Scissors beats paper, you win!";
        }
        else if(humanSelection == "paper" && computerSelection == "rock"){
            humanScore++;
            score.textContent = getScore(humanScore, computerScore);
            return "Paper beats rock, you win!";
        }
        else if(humanSelection == "rock" && computerSelection == "scissors"){
            humanScore++;
            score.textContent = getScore(humanScore, computerScore);
            return "Rock beats scissors, you win!";
        }
        else{
            return "You both picked the same, it's a tie!";
        }
    }
     function getScore(humanScore, computerScore){
        while(humanScore < 5 && computerScore < 5){  
            if(humanScore < computerScore){
                return "Player score: " + humanScore + " Computer score: " + computerScore;
            }
            else if(humanScore > computerScore){
                return "Player score: " + humanScore + " Computer score: " + computerScore ;
            }
            
            else if(humanScore == computerScore){
                return "Player score: " + humanScore + " Computer score: " + computerScore ;
            }
        } 
        const finalScore = document.querySelector("#final-score");
        const playerScore = document.querySelector("#player-score");
        const cpuScore = document.querySelector("#computer-score");
        finalScore.textContent = displayResults(humanScore, computerScore);
        playerScore.textContent = "Human score: " + humanScore;
        cpuScore.textContent = "Computer score: "  + computerScore;
    }

    function displayResults(humanScore, computerScore){
        if(humanScore == 5){
            return "The game is over, you won! Final Score: " ;
        }
        else if(computerScore == 5){
            return "The game is over, you lost. Better luck next time! Final Score: " ;
        }
    }
}
playGame();