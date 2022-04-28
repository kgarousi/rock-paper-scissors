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
function playRound(){
    let playerChoice = window.prompt("Enter choice(Rock/Paper/Scissors): ");
    let cpuChoice =   computerPlay();
    
    console.log("Player's choice: " + playerChoice);
    console.log("Opponent's choice: " + cpuChoice);
    
    let playerChoiceUpper = playerChoice.toUpperCase();
    let cpuChoiceUpper = cpuChoice.toUpperCase();

    if(cpuChoiceUpper == playerChoiceUpper){
        return "You both chose " + playerChoice + " It's a tie"
    }
    else if(cpuChoiceUpper == "ROCK"  && playerChoiceUpper == "PAPER"){
        return "Paper covers rock, you win!";
    }
    else if(cpuChoiceUpper == "PAPER"  && playerChoiceUpper == "ROCK"){
        return "Paper covers rock, you lose";
    }
    else if(cpuChoiceUpper == "SCISSORS"  && playerChoiceUpper == "ROCK"){
        return "Rock beats scissors, you win!";
    }
    else if(cpuChoiceUpper == "ROCK"  && playerChoiceUpper == "SCISSORS"){
        return "Rock beats scissors, you lose";
    }
    else if(cpuChoiceUpper == "SCISSORS"  && playerChoiceUpper == "PAPER"){
        return "Scissors cuts paper, you lose";
    }
    else if(cpuChoiceUpper == "PAPER"  && playerChoiceUpper == "SCISSORS"){
        return "Paper covers rock, you win!";
    }
}
function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}
function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound())
    }
}
