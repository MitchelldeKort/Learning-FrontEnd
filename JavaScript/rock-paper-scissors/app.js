let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p ");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("sp");



function getComputerChoice() {
    const choices = ['r' , 'p' , 's', 'l' , 'sp'];
    const randomNumber = (Math.floor(Math.random() *5));
    return choices [randomNumber];
}
console.log(getComputerChoice());


function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "scissors";
    if (letter === "l") return "lizard";
    if (letter === "sp") return "spock";

}




function win(userChoice, ComputerChoice){
userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
const smallUserWord = "user".fontsize(3).sup();
const smallWord = "comp".fontsize(3).sup();
result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${converToWord(ComputerChoice)} ${smallCompWord}  you win!`;
}

function lose(userChoice, ComputerChoice){
    console.log("LOSE");
    computerScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
const smallUserWord = "user".fontsize(3).sup();
const smallWord = "comp".fontsize(3).sup();
result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${converToWord(ComputerChoice)} ${smallCompWord}  you lost!`;
}

function draw(userChoice, ComputerChoice){
    console.log("DRAW");

userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
const smallUserWord = "user".fontsize(3).sup();
const smallWord = "comp".fontsize(3).sup();
result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} it's a draw ${converToWord(ComputerChoice)} ${smallCompWord}  it's a draw!`;
}



function game(userChoice){
const ComputerChoice = getComputerChoice();
console.log("user choice ==> " + userChoice);    
console.log("computer choice ==> " + ComputerChoice);
switch (userChoice + ComputerChoice){
    case "rs":
    case "pr":
    case "sp":
    case "rl":
    case "ls":
    case "ss":
    case "sl":
    case "lp":
    case "ps":
    case "sr":
        win(userChoice,ComputerChoice);
        console.log("USER WINS");
        break;
        case "pr":
        case "ps":
        case "rs":
        case "rl":
        case "ls":
        case "ss":
        case "sl":
        case "lp":
        case "ps":
        case "sr":
        lose(userChoice,ComputerChoice);
            console.log("USER LOSES");
            break;
    case "rr":
    case "pp":
    case "ss":
    case "rl":
    case "rs":
    case "ss":
    case "sl":
    case "lp":
    case "ps":
    case "sr":
        console.log("Its a draw");
        draw(userChoice,ComputerChoice);
        break;

}
}

game("c");

function main(){

  rock_div.addEventListener('click',function(){
    game("r");
    
  })

  paper_div.addEventListener('click',function(){
    game("p");
    
  })

  scissors_div.addEventListener('click',function(){
    game("s");
    
  })
}

main ();

