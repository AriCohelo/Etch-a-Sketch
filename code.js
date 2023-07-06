
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
  hoverBlack()
}


function hoverBlack() {

  let squares = document.querySelectorAll('.columnDiv');
  squares.forEach((square) => {
    square.addEventListener('mousedown', handleMouseDown);
    square.addEventListener('mousemove', colorBlack);
    square.addEventListener('mouseup', handleMouseUp);
  });
}

// function hoverWhite() {

//   let squares = document.querySelectorAll('.columnDiv');
//   squares.forEach((square) => {
//     square.addEventListener('mousedown', handleMouseDown);
//     square.addEventListener('mousemove', colorWhite);
//     square.addEventListener('mouseup', handleMouseUp);
//   });
//   console.log('OK')
// }

// function hoverRed() {

//   let squares = document.querySelectorAll('.columnDiv');
//   squares.forEach((square) => {
//     square.addEventListener('mousedown', handleMouseDown);
//     square.addEventListener('mousemove', colorRed);
//     square.addEventListener('mouseup', handleMouseUp);
//   });
//   console.log('OK')
// }

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
// function colorWhite(e) {
//   if (isMouseDown) {
//     e.target.style.backgroundColor = '#a8aaa9';
//   }
// }

// function colorRed(e) {
//   if (isMouseDown) {
//     e.target.style.backgroundColor = 'red';
//   }
// }

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

// let button1 = document.getElementById('button1');
// button1.addEventListener('click', hoverBlack);

// let button2 = document.getElementById('button2');
// button2.addEventListener('click', hoverWhite);

// let button3 = document.getElementById('button3');
// button3.addEventListener('click', hoverRed);



function hover(color) {

  let squares = document.querySelectorAll('.columnDiv');
  squares.forEach((square) => {
    square.addEventListener('mousedown', handleMouseDown);
    square.addEventListener('mousemove', (e) => { colorPick(e, color) });
    square.addEventListener('mouseup', handleMouseUp);
  });
  console.log('hover ok')
}


function colorPick(e, color) {
  if (isMouseDown) {
    e.target.style.backgroundColor = color;
  }
  console.log('colorPickOK')
}

let button1 = document.getElementById('button1');
button1.addEventListener('click', () => { hover('black') });

let button2 = document.getElementById('button2');
button2.addEventListener('click', () => { hover('white') });