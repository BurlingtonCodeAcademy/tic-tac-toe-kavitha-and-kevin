//Initialization of DOM variables
let start = document.getElementById("start");
let statusBar = document.getElementById("statusBar");
let cells = Array.from(document.getElementsByClassName("cell"));
let gameTitle = document.getElementById("game-title");
let clock = document.getElementById("clock");
let reset = document.getElementById("reset");
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")

//will store our current game here, empty array helps to track the played cells.
let boxes = ["", "", "", "", "", "", "", "", ""];
let gameStatus = true;

// Initialization of player variables
let currentPlayer = "X";

// Start button function//
//Start button fading out and displaying player status
start.addEventListener("click", startGame);
function startGame() {
  start.disabled = true;
  // disables the button once clicked
  statusBar.textContent = player1.value + "'s Turn";
}

reset.addEventListener("click", resetGame);
function resetGame() {
  start.disabled = false;
  boxes = ["", "", "", "", "", "", "", "", ""];
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
  currentPlayer = "X";
  statusBar.textContent = player1.value + "'s Turn"
  c0.style.backgroundColor = "";
  c1.style.backgroundColor = "";
  c2.style.backgroundColor = "";
  c3.style.backgroundColor = "";
  c4.style.backgroundColor = "";
  c5.style.backgroundColor = "";
  c6.style.backgroundColor = "";
  c7.style.backgroundColor = "";
  c8.style.backgroundColor = "";
}

function startNewGame() {
  boxes = ["", "", "", "", "", "", "", "", ""];
  start.disabled = false;
}
//this for is used to reiterate the collection of cells from HTML
for (let items of cells) {
  items.textContent === "";
  items.addEventListener("click", (event) => {
    //this statement make sure you can't enter the value before start button is pressed
    if (start.disabled === true) {
      //Boolean values are used  to trigger the players to change
      //acts as guard clause to help players to select empty cell and avoid from clicking previously selected cell

      if (event.target.textContent === "") {
        //depending on the current player, text content changes between two players
        if (currentPlayer === "X") {
          event.target.textContent = "X";

          let x = event.target.id.substring(1);
          boxes[x] = event.target.textContent;
          //checkWin function is called here to compare with the winning combinations and to decide if the player won or not
          checkWin(currentPlayer);

          currentPlayer = "O";
          statusBar.textContent = player2.value + "'s turn";
        } else if (currentPlayer === "O") {
          event.target.textContent = "O";
          //assigning a variable to get the id of each cell and substring is used to get the second letter of the id name(c1)
          let o = event.target.id.substring(1);
          //the id is now stored to the empty array of boxes to target each id value in the checkWin condition
          boxes[o] = event.target.textContent;
          //calling check win function here  and pass the current player moves and winning combinations
          checkWin(currentPlayer);
          currentPlayer = "X";
          statusBar.textContent = player1.value + "'s turn";
        }
      }
      //this prompts players to select and empty cell in the board
      else alert("Select an empty cell");
    } // this makes players to press the start button first and then clicking cell to start the game
    else alert("Click Start Game button ");
  });
}

function checkWin(player) {
  if (boxes[0] === player) {
    if (boxes[1] === player && boxes[2] === player) {
      c0.style.backgroundColor = "red";
      c1.style.backgroundColor = "red";
      c2.style.backgroundColor = "red";
      setTimeout(function () {
        alert(`Congratulations! Player ${player} wins!`);
        return true;
      }, 100);
    }
    if (boxes[3] === player && boxes[6] === player) {
      c0.style.backgroundColor = "red";
      c3.style.backgroundColor = "red";
      c6.style.backgroundColor = "red";
      setTimeout(function () {
        alert(`Congratulations! Player ${player} wins!`);
        return true;
      }, 100);
    }
    if (boxes[4] === player && boxes[8] === player) {
      c0.style.backgroundColor = "red";
      c4.style.backgroundColor = "red";
      c8.style.backgroundColor = "red";
      setTimeout(function () {
        alert(`Congratulations! Player ${player} wins!`);
        return true;
      }, 100);
    }
  }
  //bottom up and across
  if (boxes[8] === player) {
    if (boxes[2] === player && boxes[5] === player) {
      c2.style.backgroundColor = "red";
      c5.style.backgroundColor = "red";
      c8.style.backgroundColor = "red";
      setTimeout(function () {
        alert(`Congratulations! Player ${player} wins!`);
        return true;
      }, 100);
    }
    if (boxes[7] === player && boxes[6] === player) {
      c6.style.backgroundColor = "red";
      c7.style.backgroundColor = "red";
      c8.style.backgroundColor = "red";
      setTimeout(function () {
        alert(`Congratulations! Player ${player} wins!`);
        return true;
      }, 100);
    }
  }
  //middle vertical and horizontal
  if (boxes[4] === player) {
    if (boxes[3] === player && boxes[5] === player) {
      c3.style.backgroundColor = "red";
      c4.style.backgroundColor = "red";
      c5.style.backgroundColor = "red";
      setTimeout(function () {
        alert(`Congratulations! Player ${player} wins!`);
        return true;
      }, 100);
    }
    if (boxes[1] === player && boxes[7] === player) {
      c1.style.backgroundColor = "red";
      c4.style.backgroundColor = "red";
      c7.style.backgroundColor = "red";
      setTimeout(function () {
        alert(`Congratulations! Player ${player} wins!`);
        return true;
      }, 100);
    }
    if (boxes[2] === player && boxes[6] === player) {
      c2.style.backgroundColor = "red";
      c4.style.backgroundColor = "red";
      c6.style.backgroundColor = "red";
      setTimeout(function () {
        alert(`Congratulations! Player ${player} wins!`);
        return true;
      }, 100);
    }
  }
}

//style.textDecoration = "line-through"
//how to restart the game automatically
//timer
//player name
