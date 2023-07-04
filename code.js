
const container = document.querySelector('#container')
function gridCreator(num) {

  const squareSize = 80 / num;
  for (let i = 0; i < num; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('rowDiv');
    container.appendChild(rowDiv);

    for (let j = 0; j < num; j++) {
      let columnDiv = document.createElement('div');
      columnDiv.classList.add('columnDiv');
      columnDiv.style.width = `${squareSize}vh`;
      columnDiv.style.height = `${squareSize}vh`;
      rowDiv.appendChild(columnDiv);
    }
  }
  let squares = document.querySelectorAll('.columnDiv');
  squares.forEach((square) => {
    square.addEventListener('mousedown', handleMouseDown);
    square.addEventListener('mousemove', changeColor);
    square.addEventListener('mouseup', handleMouseUp);
  });
}

gridCreator(32);

let isMouseDown = false;
function handleMouseDown() {
  isMouseDown = true;
}
function handleMouseUp() {
  isMouseDown = false;
}
function changeColor(e) {
  if (isMouseDown) {
    if (e.target.classList.contains('columnDiv')) {
      e.target.style.backgroundColor = 'red';
    }
  }
}


// let gridButton = document.querySelector('.gridSquares')
// gridButton.addEventListener('click', function () {
//   let value = prompt('how many squares');
//   let squares = document.querySelectorAll('.columnDiv');
//   squares.forEach(square => square.remove())
//   gridCreator(value);

// })

let slider = document.querySelector('.slider');
slider.addEventListener('input', function () {
  // let value = 'input'
  let squares = document.querySelectorAll('.columnDiv');
  squares.forEach(square => square.remove())
  gridCreator(this.value);
})







