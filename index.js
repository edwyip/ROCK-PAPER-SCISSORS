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

function updateGame(hand){
    let result = playRound(hand, computerPlay())
    if (playerScore === 5) message.textContent = "Alright you won. Degenerate gambler."
    else if (computerScore === 5) message.textContent = "LOL you just lost to a bot, stupid much?"
    else {
        message.textContent = result["message"];
        playerScore += result["player"];
        computerScore += result["computer"];
        playerScores.textContent = "Player: " + playerScore;
        computerScores.textContent = "Computer: " + computerScore;
    }

}

const paper = document.createElement("button");
paper.textContent = "Paper";
const scissor = document.createElement("button");
scissor.textContent = "Scissors";
const rock = document.createElement("button");
rock.textContent = "Rock";

const buttons = document.createElement("div");
buttons.appendChild(paper);
buttons.appendChild(scissor);
buttons.appendChild(rock);

const message = document.createElement("div");
let playerScore = 0;
let computerScore = 0;
const scoresBox = document.createElement("div");
let playerScores = document.createElement("p");
playerScores.textContent = "Player: " + playerScore;
let computerScores = document.createElement("p");
computerScores.textContent = "Computer: " + computerScore;
scoresBox.appendChild(playerScores);
scoresBox.appendChild(computerScores);

const body = document.querySelector("body");
body.appendChild(buttons);
body.appendChild(scoresBox);
body.appendChild(message);

paper.addEventListener("click", () => updateGame("Paper"));
scissor.addEventListener("click", () => updateGame("Scissors"));
rock.addEventListener("click", () => updateGame("Rock"));

