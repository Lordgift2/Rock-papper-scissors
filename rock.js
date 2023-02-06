
const selector=["papper","rock","scissors"]; 
   function getComputerChoice() {
   return(selector[Math.floor(Math.random()*selector.length)]);
   }
let computerSelection=getComputerChoice();
console.log ;
function playRound(playerSelection,computerSelection){
    
if (playerSelection===computerSelection){
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
    
function game(){
    for (let i = 0; i < 5; i++) {
        playerSelection=prompt("whats your selector?","rock","scissors","papper")
    if (playerSelection===null){throw new Error('input selector');}
    console.log(playRound(playerSelection,getComputerChoice()));
    
}
}
console.log(game());

        
              
    

    