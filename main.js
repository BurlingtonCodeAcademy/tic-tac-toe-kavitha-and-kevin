
//Initialization of DOM variables
let start = document.getElementById ("start")
let statusBar = document.getElementById ('statusBar')
let cells = Array.from(document.getElementsByClassName("cell"))

// Initialization of player variables 
let currentPlayer='X';
let timer;

//Start button fading out and displaying player status
start.addEventListener('click', startGame)
function startGame () {
  start.disabled = true; // disables the button once clicked
  statusBar.textContent = "Player X's Turn"
  
}

//game

