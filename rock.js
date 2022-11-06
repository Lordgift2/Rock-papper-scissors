
const selector=["papper","rock","scissors"]; 
   function getComputerChoice() {
   return(selector[Math.floor(Math.random()*selector.length)]);
   }
let computerSelection=getComputerChoice();
let playerSelection=prompt("whats your selector?","rock");
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
        let playerSelection=prompt("whats your selector?","rock");
    if (playerSelection===null){throw new Error('input selector');}
    console.log(playRound(playerSelection,getComputerChoice()));
    
}
}
console.log(game());

        
              
    

    