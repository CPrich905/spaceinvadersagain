const width = 20
const squares = []

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
    square.innerHTML = i
    grid.append(square)
  }
  return squares
}

function play() {
  console.log('clicked start')
}
function stop() {
  console.log('clicked stop')
}
function reset() {
  console.log('clicked reset')
}


window.addEventListener('DOMContentLoaded', init)

//UPDATES FOR CLIFF:
