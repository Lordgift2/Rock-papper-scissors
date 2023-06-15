 function getComputerChoice(selector){
    const computerChoice  =selector [Math.floor(Math.random()*selector.length)];
        return computerChoice;
}
const selector = ['Rock','Papper','Scissors']
function playRound(playerSelection, computerSelection){
    if (playerSelection === selector[0] &&
        computerSelection === selector[0]||
        playerSelection === selector[1]&&
        computerSelection===selector[1]||
        playerSelection===selector[2]&&
        computerSelection===selector[2]){
        return ('It\'s a tie play again');
    }
    else if (playerSelection === selector[0] &&
             computerSelection === selector[1] ||
             playerSelection === selector[1] && 
             computerSelection === selector[2] ||
             playerSelection === selector[2] && 
             computerSelection === selector[0]){
        return ('Computer win');
    }
    else{
        return('player win')
    }
}
function game(){
    let playerSelection = (prompt('Enter selector'));
    let computerSelection = getComputerChoice(selector);
    console.log(playerSelection);
    console.log(computerSelection);
   console.log(playRound(playerSelection,computerSelection));
}
for (let i = 0; i <5; i++) {
game();
}
