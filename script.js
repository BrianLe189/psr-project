// make a list using const
// randomize the range
// use variable to select from the list




// make a list
const psr = ["Paper", "Scissors", "Rock"];

// randomize the range
function getRandomChoice(min,max) {
    min = Math.ceil(0);
    max = Math.floor(2);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// use getRandomChoice to select from the array
// convert to string
function computerPlay() {
    let x = psr[getRandomChoice()];
    return String(x);
}

let playerWins = 0

let computerWins = 0

// create rules for paper vs scissors vs rock
function rulesPSR(playerSelection,computerSelection) {
    let result = ""
    
    if (playerSelection === "Paper" && computerSelection === "Paper") {
        result = varResult(playerSelection,computerSelection) 
        + "\nYou Tie! Paper ties with Paper.";
        console.log(result);
        
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result = varResult(playerSelection,computerSelection)
        + "\nYou Win! Scissors beats Paper.";
        playerWins ++;
        console.log(result);
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        result = varResult(playerSelection,computerSelection)
        + "\nYou Lose! Paper beats Rock.";
        computerWins ++;
        console.log(result);
    }

    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result = varResult(playerSelection,computerSelection)
        + "\nYou Lose! Scissors beats Paper.";
        computerWins ++;
        console.log(result);
    }
    else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        result = varResult(playerSelection,computerSelection)
        + "\nYou Tie! Scissors ties with Scissors.";
        console.log(result);
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result = varResult(playerSelection,computerSelection)
        + "\nYou Win! Rock beats Scissors.";
        playerWins ++;
        console.log(result);
    }


    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = varResult(playerSelection,computerSelection)
        + "\nYou Win! Paper beats Rock.";
        playerWins ++;
        console.log(result);
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result = varResult(playerSelection,computerSelection)
        + "\nYou Lose! Rock beats Scissors";
        computerWins ++;
        console.log(result);
    }
    else if (playerSelection === "Rock" && computerSelection === "Rock") {
        result = varResult(playerSelection,computerSelection)
        + "\nYou Tie! Rock ties with Rock";
        console.log(result);
    }
    else if (playerSelection === null) {
        result = "Player has entered clicked the Cancel button," + 
        " please follow these rules." + 
        errorMessage();
        console.log(result);
        playerSelection = resetPlayerSelection();
        playerSelection;
        playRound(playerSelection,computerSelection);
    }
    else if (playerSelection === "Exit") {
        result = "Player has chosen Exit."
        console.log(result);
        return;
    }
    else {
        result = "Player has entered unexpected choice," + 
        " please follow these rules." + 
        errorMessage();
        console.log(result);
        playerSelection = resetPlayerSelection();
        playerSelection;
        playRound(playerSelection,computerSelection);
    }
}

function varResult(playerSelection,computerSelection){
    let resultMessage = "The computer chose " + computerSelection + " and the player chose " 
        + playerSelection + ".";
    return resultMessage;
}

function errorMessage(){
    let errorRules = "\n\nRule 1: Player must type in choices from: Rock, Paper, Scissors." 
    + "\nRule 2: Must include no spaces."
    + "\nRule 3: Must include no numbers or symbols."
    + "\nRule 4: Must capitalize the first letter of your choice.";
    return errorRules;
}

// convert input to first letter uppercase 

// repeat playerSelection
function resetPlayerSelection(){
    selection = prompt("Get ready to play" 
    + " Paper/Scissors/Rock." + " \nPlease enter a choice"
    + " between Paper, Scissors, or Rock." 
    + "\n\nYou can also enter: Exit \nin order to escape this prompt.");
    return selection;
}

// repeat computerSelection
function resetComputerSelection(){
    computerSelection = String(computerPlay());
    return computerSelection;
}

// create var for player input
let playerSelection = prompt("Get ready to play" 
    + " Paper/Scissors/Rock." + " \nPlease enter a choice"
    + " between Paper, Scissors, or Rock." 
    + "\n\nYou can also enter: Exit \nin order to escape this prompt.");


// create a function to run playerSelection if choice is null
// create function for error message for null, and unexpected choice


let computerSelection = String(computerPlay())



// return string that declares loser or winner 
// including how they won
// return results
function playRound(playerSelection,computerSelection){
    playerSelection;
    computerPlay();
    computerSelection;
    rulesPSR(playerSelection,computerSelection);
}

//playRound(playerSelection,computerSelection);

// make player and computer select new choice

function game(){
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection,computerSelection);
        console.log("Round " 
            + (i+1) + "\nPlayer Wins: " 
            + playerWins
            + "\nComputer Wins: " 
            + computerWins)
        if (i === 4) {
            if (computerWins > playerWins) {
                console.log("The computer has won")
            }
            else if (playerWins > computerWins) {
                console.log("The player has won")
            }
            else {
                console.log("It is a tie")
            }
        }
        if (i < 4) {
        playerSelection = resetPlayerSelection();
        computerSelection = resetComputerSelection();
        }
        else {
            break;
        }
    }
}

game()
