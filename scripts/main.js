
//Initialization of DOM variables
let start = document.getElementById("start");
let statusBar = document.getElementById("statusBar");
let cells = Array.from(document.getElementsByClassName("cell"));
let gameTitle = document.getElementById('game-title')
let clock = document.getElementById('clock')


//will store our current game here, empty array helps to track the played cells.
let boxes = ['', '', '', '', '', '', '', '', '',]
let gameStatus = true

// Initialization of player variables 
let currentPlayer = 'X'

// Start button function//
//Start button fading out and displaying player status
start.addEventListener('click', startGame)
function startGame() {
  start.disabled = true;
  // disables the button once clicked
  statusBar.textContent = "Player X's Turn";
}
//this for is used to reiterate the collection of cells from HTML
for (let items of cells) {
  items.textContent === ''
  items.addEventListener('click', (event) => {

    //this statement make sure you can't enter the value before start button is pressed
    if (start.disabled === true) {

      //Boolean values are used  to trigger the players to change  
      //acts as guard clause to help players to select empty cell and avoid from clicking previously selected cell

      if (event.target.textContent === '') {
        //depending on the current player, text content changes between two players
        if (currentPlayer === 'X') {
          event.target.textContent = 'X'

          let x = event.target.id.substring(1)
          boxes[x] = event.target.textContent
          //checkWin function is called here to compare with the winning combinations and to decide if the player won or not
          checkWin(currentPlayer)

          currentPlayer = 'O'
          statusBar.textContent = `Player O's move`


        } else if (currentPlayer === 'O') {
          event.target.textContent = 'O'
          //assigning a variable to get the id of each cell and substring is used to get the second letter of the id name(c1)
          let o = event.target.id.substring(1)
          //the id is now stored to the empty array of boxes to target each id value in the checkWin condition
          boxes[o] = event.target.textContent
          //calling check win function here  and pass the current player moves and winning combinations 
          checkWin(currentPlayer)
          currentPlayer = 'X'
          statusBar.textContent = `Player X's move`

        }
      }
      //this prompts players to select and empty cell in the board
      else alert('select an empty cell')
    } // this makes players to press the start button first and then clicking cell to start the game
    else alert('click start button ')
  })
}

function checkWin(player) {

  if (boxes[0] === player) {
    if (boxes[1] === player && boxes[2] === player) {
      alert(`Congratulations! player ${player} wins up Top`)
      return true;
    }
    if (boxes[3] === player && boxes[6] === player) {
      alert(`Congratulations! player ${player} wins on the Left`)
      return true;
    }
    if (boxes[4] === player && boxes[8] === player) {
      alert(`Congratulations! player ${player} wins Diagonally`)
      return true;
    }
  }
  //bottom up and across
  if (boxes[8] === player) {
    if (boxes[2] === player && boxes[5] === player) {
      alert(`Congratulations! player ${player} wins Right`)
      return true;
    }
    if (boxes[7] === player && boxes[6] === player) {
      alert(`Congratulations! player ${player} wins on the Bottom`)
      return true;
    }
  }
  //middle vertical and horizontal
  if (boxes[4] === player) {
    if (boxes[3] === player && boxes[5] === player) {
      alert(`Congratulations! player ${player} wins middle horizontal`)
      return true;
    }
    if (boxes[1] === player && boxes[7] === player) {
      alert(`Congratulations! player ${player} wins on the middle vertical`)
      return true;
    }
    if (boxes[2] === player && boxes[6] === player) {
      alert(`Congratulations! player ${player} wins on the middle vertical`)
      return true;
    }
  }
}



//style.textDecoration = "line-through"
//how to restart the game automatically
//timer
//player name
