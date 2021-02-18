
//Initialization of DOM variables
let start = document.getElementById ("start")
let statusBar = document.getElementById ("statusBar")
let cells= Array.from(document.getElementsByClassName(".cell"))
let gameTitle=document.getElementById('game-title')
let boxes =[null,null,null,null,null,null,null,null,null]



/*let timer








//winning combination
let winning combination =[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6]
[1,4,7]
[2,5,8]
[0,4,8]
[2,4,6]
]*/
// Initialization of player variables 

let currentPlayer="X";

//Start button fading out and displaying player status
start.addEventListener('click', startGame)
function startGame (event) {
  start.disabled = true; // disables the button once clicked
  statusBar.textContent = "Player X's Turn";
}
/*for(let item of cells){
item.addEventListener('click',playerTurn)
function playerTurn(event){
  if(currentPlayer===true){
  cell.textContent='X'
  currentPlayer=false
  statusBar.textContent=`Player O's move`
} else {
  cell.textContent='O'
  currentPlayer=true
  statusBar.textContent=`Player X's move`
}
if (cell.textContent==='O'|| cell.textContent==='X'){
  statusBar.textContent=`select an empty cell`
}
}
}
//function checkWin(){
  /*if (boxes[0]===player){
if (boxes[1] ===player &&& boxes[2]===player){
  console.log(`${player}wins up top`)
  return true;
}
if (boxes[3] ===player &&& boxes[6]===player){
  console.log(`${player}wins on the left`)
  return true;
}
if (boxes[4] ===player &&& boxes[8]===player){
  console.log(`${player}wins diagonally`)
  return true;
}
}
//bottom up and across
if (boxes[8]===player){
if (boxes[2] ===player &&& boxes[5]===player){
  console.log(`${player}wins right`)
  return true;
}
if (boxes[7] ===player &&& boxes[6]===player){
  console.log(`${player}wins on the bottom`)
  return true;
}
}
//middle vertical and horizontal
if (boxes[4]===player){
if (boxes[3] ===player &&& boxes[5]===player){
  console.log(`${player}wins middle horizontal`)
  return true;
}
if (boxes[1] ===player &&& boxes[7]===player){
  console.log(`${player}wins on the middle vertical`)
  return true;
}
}
}

}



//game

