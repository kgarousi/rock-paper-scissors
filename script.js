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
console.log(computerPlay())
function playRound(){
    let player_choice = "Rock"
    let opponent_choice = computerPlay()
    if(opponent_choice = "Rock"){
        return "You both chose rock, it's a tie."
    }
    else if(opponent_choice = "Paper"){
        return "Paper covers rock, you lose!"
    }
    else{
        return "Rock beats scissors, you win!"
    }
}
function getRandomNumber(max){
    return Math.floor(Math.random() * max)
}
