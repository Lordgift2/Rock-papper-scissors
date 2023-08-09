function getComputerChoice(selector){
  const computerChoice  =selector [Math.floor(Math.random()*selector.length)];
      return computerChoice;
}
const selector = ['Rock','Papper','Scissors']
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
function playRound(playerSelection, computerSelection){
  if (playerSelection === computerSelection){
      roundWinner = 'tie';
  }
   if (playerSelection === selector[0] &&
           computerSelection === selector[1] ||
           playerSelection === selector[1] && 
           computerSelection === selector[2] ||
           playerSelection === selector[2] && 
           computerSelection === selector[0]){
             computerScore++;
            roundWinner = "computer";
  }
   if (playerSelection === selector[1] &&
    computerSelection === selector[0] ||
    playerSelection === selector[2] && 
    computerSelection === selector[1] ||
    playerSelection === selector[0] && 
    computerSelection === selector[2]) {
    playerScore++;
      roundWinner =  "player";
  }
  + updateScoremessage(roundWinner,playerSelection,computerSelection);
}
function gameOver(){
 return playerScore === 5 || computerScore === 5
}
//Game page Info
const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage');
const playerScorepara = document.getElementById("playerScore");
const computerScorepara = document.getElementById("computerScore");
const roundWinnerpara = document.getElementById("roundWinner");
const rockBtn = document.getElementById('rock');
const papperBtn = document.getElementById('papper');
const scissorsBtn = document.getElementById('scissors')
const restartBtn=document.getElementById("restartBtn");
const endgameModal = document.getElementById('endgameModal');
const endgameMsg = document.getElementById('endgameMsg');
const overlay = document.getElementById('overlay');

rockBtn.addEventListener('click',()=>handleclick('Rock'));
papperBtn.addEventListener('click',()=>handleclick('Papper'));
scissorsBtn.addEventListener('click',()=>handleclick('Scissors'));
restartBtn.addEventListener('click',restartGame);

function handleclick(playerSelection){
 if(gameOver()){
    openEndgameModal()
    return
 }
 const computerSelection = getComputerChoice(selector);
 playRound(playerSelection,computerSelection);
 updateScore();

 if(gameOver()){
    openEndgameModal()
    setFinalMessage()
    return
 }
}
function updateScore(){
  if(roundWinner ==='tie'){
    scoreInfo.textContent = "It's a tie!"
  } 
   else if(roundWinner === 'computer'){
     winner = 'computer';
    scoreInfo.textContent = 'You lost!'
 }
  else if (roundWinner === 'player'){ 
   winner = 'player'
    scoreInfo.textContent = 'You won!'
 }
 playerScorepara.textContent=`Playerscore:${playerScore}`;
 computerScorepara.textContent=`Computerscore:${computerScore}`;
}
function updateScoremessage(winner,playerSelection,computerSelection){
 if ( winner === "computer"){
    scoreMessage.textContent = `${capitalizeFirstLetter(
       computerSelection
     )}  beat  ${playerSelection.toLowerCase()}`
     return;
 }
else if (winner === "player"){
    scoreMessage.textContent = `${capitalizeFirstLetter(
       playerSelection
     )}  beat  ${computerSelection.toLowerCase()}`
     return;
 }
 
   else{ scoreMessage.textContent = `${capitalizeFirstLetter(
    playerSelection
     )} tie  ${computerSelection.toLowerCase()}`
   }
}
function capitalizeFirstLetter(string) {
 return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}
function openEndgameModal() {
 endgameModal.classList.add('active')
 overlay.classList.add('active')
}
function closeEndgameModal() {
 endgameModal.classList.remove('active')
 overlay.classList.remove('active')
}
function setFinalMessage() {
 return playerScore > computerScore
   ? (endgameMsg.innerHTML = '<strong>You won</strong> 😀')
   : (endgameMsg.innerHTML = '<strong>You lost</strong> 🙁')
   ? (endgameMsg.textContent = 'You won!')
   : (endgameMsg.textContent = 'You lost...')
}
function restartGame(){
  playerScore=0;
  computerScore=0;
  playerScorepara.textContent = `Playerscore:${playerScore}`;
  computerScorepara.textContent=`Computerscore:${computerScore}`;
  scoreMessage.textContent ="The First to get 5 score wins the game!!"
  scoreInfo.textContent = "Choose your Weapon !!" 
};

  
