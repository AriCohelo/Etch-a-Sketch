const gridContainer = document.querySelector('#gridContainer')
function gridCreator(num) {
  const squareSize = 70 / num;
  for (let i = 0; i < num; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('rowDiv');
    gridContainer.appendChild(rowDiv);

    for (let j = 0; j < num; j++) {
      const columnDiv = document.createElement('div');
      columnDiv.classList.add('columnDiv');
      columnDiv.style.width = `${squareSize}vh`;
      columnDiv.style.height = `${squareSize}vh`;
      rowDiv.appendChild(columnDiv);
    }
  }
  hover('black')
}

gridCreator(32);

let isMouseDown = false;
function handleMouseDown() {
  isMouseDown = true;
}
function handleMouseUp() {
  isMouseDown = false;
}
function colorBlack(e) {
  if (isMouseDown) {
    e.target.style.backgroundColor = 'black';
  }
}

let slider = document.querySelector('.slider');
function sliderStyle() {

  let sliderText = document.querySelector('.sliderText');
  sliderText.textContent = `${slider.value} X ${slider.value}`;
  sliderText.style.color = '#8d8d8e';
  sliderText.style.textAlign = 'center';
  sliderText.style.marginTop = '85px'
}
sliderStyle();

slider.addEventListener('input', function () {
  let squares = document.querySelectorAll('.columnDiv');
  squares.forEach(square => {
    square.remove();
    sliderStyle();
  })
  gridCreator(this.value);
})

function hover(color) {

  let squares = document.querySelectorAll('.columnDiv');
  squares.forEach((square) => {
    square.addEventListener('mousedown', handleMouseDown);
    square.addEventListener('mousemove', (e) => { colorPick(e, color) });
    square.addEventListener('mouseup', handleMouseUp);
  });
}

function colorPick(e, color) {
  if (isMouseDown) {
    e.target.style.backgroundColor = color;
  }
}

let button1 = document.getElementById('button1');
button1.addEventListener('click', () => { hover('black') });

let button2 = document.getElementById('button2');
button2.addEventListener('click', () => { hover('white') });

let button3 = document.getElementById('button3');
button3.addEventListener('click ', () => { hover(gayRandomColor()) });




const gayColors = ['228, 3, 3', '255, 140, 0', '	255, 237, 0', '0, 128, 38', '36, 64, 142', '115, 41, 130']
function gayRandomColor() {
  const random = Math.floor(Math.random() * gayColors.length);
  const gayColor = `rgb(${gayColors[random]})`;
  return gayColor
}