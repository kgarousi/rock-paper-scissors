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
    let playerChoice = window.prompt("Enter choice(Rock/Paper/Scissors): ")
    let cpuChoice = computerPlay()
    console.log("Player's choice: " + playerChoice)
    console.log("Opponent's choice: " + cpuChoice)
    if(cpuChoice == "Rock"){
        return "You both chose rock, it's a tie.";
    }
    else if(cpuChoice == "Paper"){
        return "Paper covers rock, you lose!";
    }
    else{
        return "Rock beats scissors, you win!";
    }
}
function getRandomNumber(max){
    return Math.floor(Math.random() * max);
}
function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound());
    }
}
