let start = document.getElementById ("start")
let cell = document.getElementsByClassName ("cell")
let statusBar = document.getElementById ('statusBar')
let currentPlayer;

let c0 = document.getElementById ('c0')
let c1 = document.getElementById ('c1')
let c2 = document.getElementById ('c2')
let c3 = document.getElementById ('c3')
let c4 = document.getElementById ('c4')
let c5 = document.getElementById ('c5')
let c6 = document.getElementById ('c6')
let c7 = document.getElementById ('c7')
let c8 = document.getElementById ('c8')

start.addEventListener('click', startGame)

c0.addEventListener('click', playerMove)
c1.addEventListener('click', playerMove)
c2.addEventListener('click', playerMove)
c3.addEventListener('click', playerMove)
c4.addEventListener('click', playerMove)
c5.addEventListener('click', playerMove)
c6.addEventListener('click', playerMove)
c7.addEventListener('click', playerMove)
c8.addEventListener('click', playerMove)

function startGame () {
  start.disabled = true;
  statusBar.textContent = "Player X's Turn"
}


