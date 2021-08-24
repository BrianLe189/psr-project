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


// create rules for paper vs scissors vs rock
function rulesPSR(playerSelection,computerSelection) {
    let result = ""
    
    if (playerSelection === "Paper" && computerSelection === "Paper") {
        result = "The computer chose Paper and the player chose " 
        + playerSelection + "." + "\nYou Tie! Paper ties with Paper.";
        console.log(result);
        
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result = "The computer chose Paper and the player chose " 
        + playerSelection + "." + "\nYou Win! Scissors beats Paper.";
        console.log(result);
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        result = "The computer chose Paper and the player chose " 
        + playerSelection + "." + "\nYou Lose! Paper beats Rock.";
        console.log(result);
    }

    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result = "The computer chose Scissors and the player chose " 
        + playerSelection + "." + "\nYou Lose! Scissors beats Paper.";
        console.log(result);
    }
    else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        result = "The computer chose Scissors and the player chose " 
        + playerSelection + "." + "\nYou Tie! Scissors ties with Scissors.";
        console.log(result);
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result = "The computer chose Scissors and the player chose " 
        + playerSelection + "." + "\nYou Win! Rock beats Scissors.";
        console.log(result);
    }


    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = "The computer chose Rock and the player chose " 
        + playerSelection + "." + "\nYou Win! Paper beats Rock.";
        console.log(result);
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result = "The computer chose Rock and the player chose " 
        + playerSelection + "." + "\nYou Lose! Rock beats Scissors";
        console.log(result);
    }
    else if (playerSelection === "Rock" && computerSelection === "Rock") {
        result = "The computer chose Rock and the player chose " 
        + playerSelection + "." + "\nYou Tie! Rock ties with Rock";
        console.log(result);
    }
    else if (playerSelection === null) {
        result = "Player has entered clicked the Cancel button," + 
        " please follow these rules." + 
        "\n\nRule 1: Player must type in choices from: Rock, Paper, or Scissors." 
        + "\nRule 2: Must include no spaces."
        + "\nRule 3: Must include no numbers or symbols."
        + "\nRule 4: Must capitalize the first letter of your choice.";
        console.log(result);
        let playerSelection = prompt("Get ready to play" 
    + " Paper/Scissors/Rock." + " \nPlease enter a choice"
    + " between Paper, Scissors, or Rock."
    + "\n\nYou can also enter: Exit \nin order to escape this prompt.");
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
        "\n\nRule 1: Player must type in choices from: Rock, Paper, Scissors." 
        + "\nRule 2: Must include no spaces."
        + "\nRule 3: Must include no numbers or symbols."
        + "\nRule 4: Must capitalize the first letter of your choice.";
        console.log(result);
        let playerSelection = prompt("Get ready to play" 
    + " Paper/Scissors/Rock." + " \nPlease enter a choice"
    + " between Paper, Scissors, or Rock."
    + "\n\nYou can also enter: Exit \nin order to escape this prompt.");
        playerSelection;
        playRound(playerSelection,computerSelection);
    }
}

// create function for player input
// convert input to first letter uppercase 
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

playRound(playerSelection,computerSelection);

