
const gridContainer = document.querySelector('#gridContainer')
function gridCreator(num) {

  const cellSize = 70 / num;
  for (let i = 0; i < num; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    gridContainer.appendChild(column);

    for (let j = 0; j < num; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.width = `${cellSize}vh`;
      cell.style.height = `${cellSize}vh`;
      column.appendChild(cell);
    }
  }
}
gridCreator(32)

let isMouseDown = false;
function handleMouseDown() {
  isMouseDown = true;
}
function handleMouseUp() {
  isMouseDown = false;
}


// let cells = document.querySelectorAll('.cell')
// cells.forEach(elm => {
//   elm.addEventListener('mouseover', gayColor);
// });


function hover(e) {

  let squares = document.querySelectorAll('.cell');
  squares.forEach((square) => {
    square.addEventListener('mousedown', handleMouseDown);
    square.addEventListener('mousemove', () => { gayColor(e) });
    square.addEventListener('mouseup', handleMouseUp);
  });
  console.log('click hover')
}

function gayColor(e) {
  const gayColors = ['228, 3, 3', '255, 140, 0', '	255, 237, 0', '0, 128, 38', '36, 64, 142', '115, 41, 130']
  const random = Math.floor(Math.random() * gayColors.length);
  const gayColor = `rgb(${gayColors[random]})`;
  e.target.style.backgroundColor = gayColor
}

let clickCells = document.querySelectorAll('.cell');
clickCells.forEach((square) => {
  square.addEventListener('mousedown', hover)
});