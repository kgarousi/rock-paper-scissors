game()
function computerPlay(){
    let opponent_choice = getRandomNumber(3)
    if(opponent_choice == 0){
        return "Rock"
    }
    else if(opponent_choice == 1){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}
function playRound(){
    let player_choice = "Rock"
    let cpu_choice = computerPlay()
    console.log(cpu_choice)
    if(cpu_choice == "Rock"){
        return "You both chose rock, it's a tie."
    }
    else if(cpu_choice == "Paper"){
        return "Paper covers rock, you lose!"
    }
    else{
        return "Rock beats scissors, you win!"
    }
}
function getRandomNumber(max){
    return Math.floor(Math.random() * max)
}
function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound())
    }
}
