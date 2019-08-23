let userScore=0;
let computerScore=0;

const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.getElementById("score-board");
const result_p=document.querySelector(".result>p");
const action_part=document.querySelector(".action");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");


function getComputerChoice(){
    choices=["r","p","s"];
    choice=Math.floor(Math.random()*3);
    return choices[choice];
}


function letterToWorld(letter){
    if(letter=="p"){
        return "PAPER";
    }

    if(letter=="r"){
        return "ROCK";
    }

    else
    return "SCISSORS";
}


function lose(user,computer){
    computerScore++;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=letterToWorld(computer)+" WINS OVER "+letterToWorld(user);
    action_part.innerHTML="User Lose";

    
}

function win(user,computer){
    userScore++;
    userScore_span.innerHTML=userScore;
    result_p.innerHTML=letterToWorld(user)+" WINS OVER "+letterToWorld(computer);
    action_part.innerHTML="User Win";
}

function game(userChoice){
    const computerChoice=getComputerChoice();

    switch (userChoice+computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;


        case "rr":
        case "ss":
        case "pp":
            console.log("Draw");
            break;
        default:
            break;
    }

}



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

main();