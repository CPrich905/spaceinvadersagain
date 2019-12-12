const width = 20
const squares = []

function init() {
  const grid = document.querySelector('.grid')
  
  for (let i = 0; i < width*width; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    squares.push(square)
    square.innerHTML = i
    grid.append(square)
  }
}

window.addEventListener('DOMContentLoaded', init)