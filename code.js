
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
let gayButton = document.getElementById('button3')
gayButton.addEventListener('click', handleGayBtnTrue)
let buttonGayActive = false;
function handleGayBtnTrue() {
  buttonGayActive = true;
  gayButton.style.border = '7px solid #eb9e22';
  gayButton.style.boxShadow = '0px 0px 15px white';
  gayButton.style.fontSize = '26px'
  gayColors()
}
function handleGayBtnfalse() {
  buttonGayActive = false;
}

function gayColors() {
  if (buttonGayActive) {

    let cell = document.querySelectorAll('.cell');
    cell.forEach((square) => {
      square.addEventListener('mousedown', handleMouseDown);
      square.addEventListener('mousemove', (e) => { gayColor(e) });
      square.addEventListener('mouseup', handleMouseUp);
    });
  }

}


function colorBlack(e) {
  e.target.style.backgroundColor = 'black'
}

function gayColor(e) {
  if (isMouseDown) {
    const gayColors = ['228, 3, 3', '255, 140, 0', '	255, 237, 0', '0, 128, 38', '36, 64, 142', '115, 41, 130']
    const random = Math.floor(Math.random() * gayColors.length);
    const gayColor = `rgb(${gayColors[random]})`;
    e.target.style.backgroundColor = gayColor

  }
}


