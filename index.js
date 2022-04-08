function computerPlay() {
    const hands = ["Rock", "Paper", "Scissors"] ;
    let index = Math.floor(Math.random() * 3);
    return hands[index];
}

function capitalize(str){
    let firstChar = str.slice(0,1);
    firstChar = firstChar.toUpperCase();
    let rest = str.slice(1).toLowerCase();
    return firstChar + rest;
}

function result(playerSelection, computerSelection){
    const hand = [playerSelection, computerSelection];
    const winCombo = [['Paper', "Rock"], ["Scissors", "Paper"], ["Rock", "Scissors"]];
    let winDrawLose = (playerSelection === computerSelection)? "draw":
    (winCombo.toString().includes(hand.toString()))?"win": "lose";
    return winDrawLose;
}

function addScore(winDrawLose){
    let scores = (winDrawLose === "win") ? {"player": 1, "computer": 0}:
    (winDrawLose === "lose") ? {"player": 0, "computer": 1}: 
    {"player": 0, "computer": 0};
    return scores;
}

function playRound(playerSelection, computerSelection){
    playerSelection = capitalize(playerSelection);
    const hands = ['Rock', 'Paper', 'Scissors'];
    let message = {"win": "Yay! You won!", "lose": "Lmao you lose. Get Rekt.", "draw": "It's a Draw! Bitch!"};
    if (hands.includes(playerSelection) === false){
        return {"message":"Invalid output you illiterate fuck.", "player": 0, "computer": 0}
    } else {
        let winDrawLose = result(playerSelection, computerSelection);
        let round = addScore(winDrawLose);
        round["message"] = message[winDrawLose];
        return round;
    }
}

function game(){
    let playerScore = 0;
    let comScore = 0;
    while (playerScore < 3 && comScore < 3) {
        let playerSelection = prompt("Rock, scissors, paper?", "Pick");
        let computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        playerScore += round["player"];
        comScore += round["computer"];
        console.log("You played " + capitalize(playerSelection) + ". Computer played " + computerSelection + ".");
        console.log(round["message"]);
        console.log("Your Score: " + playerScore + "   VS   Computer Score: " + comScore);
    }
    let winner = (playerScore > comScore) ?
            "Alright you won 3 out of 5 rounds first you the winner. Degenerate gambler." :
            "LOL you just lost to a bot, stupid much?";
    console.log(winner);
    return null;
}