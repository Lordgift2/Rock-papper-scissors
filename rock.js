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
    else if (playerSelection === selector[1] &&
        computerSelection === selector[0] ||
        playerSelection === selector[2] && 
        computerSelection === selector[1] ||
        playerSelection === selector[0] && 
        computerSelection === selector[2]){
    return('player win')
}
else{
    return('invalid entries selected');
}
    }
function game(){
    let playerSelection = "";
    let computerSelection = getComputerChoice(selector);
    console.log(playerSelection);
    console.log(computerSelection);
   console.log(playRound(playerSelection,computerSelection));
}
 const rockBtn = document.getElementById('rock');
 rockBtn.addEventListener('click',()=>{
    playerSelection = selector[0];
    computerSelection = getComputerChoice(selector);

    console.log(playRound(playerSelection,computerSelection))
 })
 const papperBtn = document.getElementById('papper');
 papperBtn.addEventListener('click',()=>{
    playerSelection = selector[1];
    computerSelection = getComputerChoice(selector);

    console.log(playRound(playerSelection,computerSelection))
 })
 const scissorsBtn = document.getElementById('scissors');
 scissorsBtn.addEventListener('click',()=>{
    playerSelection = selector[2];
    computerSelection = getComputerChoice(selector);

    console.log(playRound(playerSelection,computerSelection))
 })
/*
for (let i = 0; i <5; i++) {
game();
}
*/

