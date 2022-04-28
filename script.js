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
        return "It's a tie"
    }
    else{
        return "It's not a tie"
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
