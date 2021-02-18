
//Initialization of DOM variables
let start = document.getElementById ("start")
let statusBar = document.getElementById ("statusBar")
let cells= Array.from(document.getElementsByClassName(".cell"))
let gameTitle=document.getElementById('game-title')
let boxes =[null,null,null,null,null,null,null,null,null]

let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let c5 = document.getElementById("c5");
let c6 = document.getElementById("c6");
let c7 = document.getElementById("c7");
let c8 = document.getElementById("c8");
let c9 = document.getElementById("c9");
let currentCell;
let timer;

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
for(let item of cells){
item.addEventListener('click',playerTurn)
function playerTurn(event){
  if(currentPlayer===x){
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
  /*if (c[0]===player){
if (c1 ===player &&& c2===player){
  console.log(`${player}wins up top`)
  return true;
}
if (c3===player &&& c6===player){
  console.log(`${player}wins on the left`)
  return true;
}
if (c4 ===player &&& c8===player){
  console.log(`${player}wins diagonally`)
  return true;
}
}
//bottom up and across
if (c8===player){
if (c2===player &&& c5===player){
  console.log(`${player}wins right`)
  return true;
}
if (c7 ===player &&& c6===player){
  console.log(`${player}wins on the bottom`)
  return true;
}
}
//middle vertical and horizontal
if (c4===player){
if (c3 ===player &&& c5===player){
  console.log(`${player}wins middle horizontal`)
  return true;
}
if (c1 ===player &&& c7===player){
  console.log(`${player}wins on the middle vertical`)
  return true;
}
}
}



//game*/
