const width = 20
const squares = []
const player = null

class Player{
  constructor(startingIndex) {
    this.playerIndex = startingIndex
    this.lives = 3
    this.hit = false
  }

  // player movement
  movePlayer() {
    console.log('move player fires')
    this.startingIndex = Math.floor(width * width - width)
    squares.forEach(square => square.classList.remove('player'))
    squares[this.playerIndex].classList.add('player')
  }
}

function keyHandler() {
  let playerMoves = true
  
  switch(expectExport.keyCode) {
    case 39:
      if (player.playerIndex % width < width-1) {
        player.playerIndex++
      }
      break
    case 37:
      if (player.playerIndex % width > 0) {
        player.playerIndex--
      }
      break
    
    default:
      playerMoves: false
  }
  if (playerMoves) player.movePlayer()
}

// Init creates grid, attached event listeners to start/stop/play buttons.
function init() {
  const startBtn = document.querySelector('#startBtn')
  const stopBtn = document.querySelector('#stopBtn')
  const resetBtn = document.querySelector('#resetBtn')
  const grid = document.querySelector('.grid')
 
  startBtn.addEventListener('click', play)
  stopBtn.addEventListener('click', stop)
  resetBtn.addEventListener('click', reset)
  
  for (let i = 0; i < width*width; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    squares.push(square)
    grid.append(square)
  }
  return squares
}
// play needs to populate aliens array, player & start timers for move/fire
// alien rank = (width/3) then (rank/2) * ranks
// movement function should have each alien move across the grid until their count reaches (width - ranks)
// alienshoot must ensure that not all aliens fire simultaneously (?Math.random?)
function play() {
  console.log('clicked start')
  rank = Math.floor(width/3)
  row = Math.floor(rank/2)
  const player = new Player(width*width-width)
}

// should pause all timers & disable player move/fire controls, change innerHTML to restart
function stop() {
  console.log('clicked stop')
}
// should reload page
function reset() {
  console.log('clicked reset')
}


window.addEventListener('DOMContentLoaded', init)

// UPDATES FOR CLIFF:
// X added notes and tested ranks/squares/width in start()
// X build class for player
// X add listeners for keydowns on arrows & shoot buttons
// - check player moves
// X remove i from grid-items


// IDEAS
// christmas theme?
// missile count for players/weapon cooldown. Different type of weapons?