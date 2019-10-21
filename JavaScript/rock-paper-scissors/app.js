let userScore = 0;
let computerScore = 0;
let userChoice;
let computerChoice;
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



function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "scissors";
    if (letter === "l") return "lizard";
    if (letter === "sp") return "spock";

}



function win(userChoice, computerChoice){
userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
const smallUserWord = "user".fontsize(3).sup();
const smallCompWord = "comp".fontsize(3).sup();
result_p.innerHTML = userChoice + "beats" + computerChoice + "you win!";
}


function lose(userChoice, computerChoice){
    console.log("LOSE");
    computerScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
const smallUserWord = "user".fontsize(3).sup();
const smallCompWord = "comp".fontsize(3).sup();
result_p.innerHTML = userChoice  + "LOSE" + computerChoice + "you lose!"

function draw(userChoice, computerChoice){
    console.log("DRAW");

userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
const smallUserWord = "user".fontsize(3).sup();
const smallWord = "comp".fontsize(3).sup();
result_p.innerHTML = userChoice + "draw" + computerChoice + "it's a draw!";
}



function game(userChoice){
const computerChoice = getComputerChoice();
console.log("user choice ==> " + userChoice);    
console.log("computer choice ==> " + computerChoice);
switch (userChoice + computerChoice){
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
        win(userChoice,computerChoice);
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
        lose(userChoice,computerChoice);
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
        draw(userChoice,computerChoice);
        console.log("Its a draw");
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

  lizard_div.addEventListener('click',function(){
    game("l");
  })

  spock_div.addEventListener('click',function(){
    game("sp");
  })
}

main();