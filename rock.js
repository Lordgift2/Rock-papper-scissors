
const selector=["papper","rock","scissors"]; 
   function getComputerChoice() {
   return(selector[Math.floor(Math.random()*selector.length)]);
   }
const computerSelection=getComputerChoice();
console.log(computerSelection);
const playerSelection=selector[1];
console.log(playerSelection);
function playRound(playerSelection,computerSelection){
    if(playerSelection===computerSelection){
        return("its a tie, play-again");
    }
    else if (
        playerSelection ===selector[1] && computerSelection ===selector[2] ||
        playerSelection ===selector[2] && computerSelection ===selector[0] ||
        playerSelection ===selector[0] && computerSelection ===selector[1] 
    ){
        return("you win this round! Good Job!");
    }
    else{
        return("you lose, computer win");
    }
    } 
console.log(playRound(playerSelection,computerSelection));

