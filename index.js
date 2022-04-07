function computerPlay() {
    const hands = ['Rock', 'Paper', 'Scissors'] ;
    let index = Math.floor(Math.random() * 3);
    return hands[index];
}

function capitalize(str){
    let firstChar = str.slice(0,1);
    firstChar = firstChar.toUpperCase();
    let rest = str.slice(1).toLowerCase();
    str = firstChar + rest;
    return str;
}

function messages(win="Yay! You won!", lose="Lmao you lose. Get Rekt.", draw="It's a Draw! Bitch!"){
    return {"win": win, "lose": lose, "draw": draw}
}

function result(playerSelection, computerSelection){
    const hand = [playerSelection, computerSelection];
    const winCombo = [["Paper", "Rock"], ["Scissors", "Paper"], ["Rock", "Scissors"]];
    let winDrawLose = (playerSelection === computerSelection)? "draw":
    (winCombo.includes(hand))?"win": "lose";
    return winDrawLose;
}

function playRound(playerSelection, computerSelection){
    playerSelection = capitalize(playerSelection);
    const hands = ['Rock', 'Paper', 'Scissors'];
    let message = messages();
    if (hands.includes(playerSelection) === false){
        return "Invalid output you illiterate fuck.";}
    else {
        let winDrawLose = result(playerSelection, computerSelection);
        return message[winDrawLose];
    }
}

function game(){
    let message = messages();
    let playerScore = 0;
    let comScore = 0;
    for (let i = 0; i <= 5; i++) {
        let playerSelection = prompt("Rock, scissors, paper?", "Pick");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        switch (result) {
            case message["win"]:
                playerScore++;
                break;
            case message["lose"]:
                comScore++;
                break;
            default:
                i--;
        }
        console.log("You played " + capitalize(playerSelection) + ". Computer played " + computerSelection + ".");
        console.log(result);
        console.log("Your Score: " + playerScore + "VS Computer Score: " + comScore);
        if (playerScore === 3 || comScore === 3){
            let winner = (playerScore > comScore) ? "Alright you won 3 out of 5 rounds first you the winner. Degenerate gambler." : "LOL you just lost to a bot, stupid much?";
            console.log(winner);
            return;
        }
     }

}