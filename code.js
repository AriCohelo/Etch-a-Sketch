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
      cell.style.backgroundColor = 'rgb(255,255,255)'
      column.appendChild(cell);
    }
  }
}
gridCreator(32)

let isMouseDown = false;
function handleMouseDown() {
  isMouseDown = true;
  console.log('mousedown')
}
function handleMouseUp() {
  isMouseDown = false;
}

// Gay config

let gayButton = document.getElementById('button3');
gayButton.addEventListener('click', handleGayBtnTrue);

let buttonGayActive = false;

function handleGayBtnTrue() {
  buttonGayActive = true;
  gayButton.style.border = '7px solid #eb9e22';
  gayButton.style.boxShadow = '0px 0px 15px white';
  gayButton.style.fontSize = '26px';
  gayColorsPaint();
  handleColorPickBtnFalse()
}
function handleGayBtnfalse() {
  buttonGayActive = false;
  gayButton.style.border = '5px solid #eb9e22';
  gayButton.style.boxShadow = '0px 0px 4px white';
  gayButton.style.fontSize = '25px';

}

function gayColorsPaint() {
  if (buttonGayActive) {
    let cell = document.querySelectorAll('.cell');
    cell.forEach((square) => {
      square.addEventListener('mousedown', handleMouseDown);
      square.addEventListener('mousemove', (e) => { gayColorRandom(e) });
      square.addEventListener('mouseup', handleMouseUp);
    });
  }
}

function gayColorRandom(e) {
  if (isMouseDown) {
    const gayColorsPaint = ['228, 3, 3', '255, 140, 0', '	255, 237, 0', '0, 128, 38', '36, 64, 142', '115, 41, 130']
    const random = Math.floor(Math.random() * gayColorsPaint.length);
    const gayColorRandom = `rgb(${gayColorsPaint[random]})`;
    e.target.style.backgroundColor = gayColorRandom
  }
}
// color Pick Config

let colorPick = document.getElementById('colorPick')
colorPick.addEventListener('click', handleColorPickBtnTrue);
let colorPickContainer = document.getElementById('colorPickContainer')

let handleColorPickBtn = false;

function handleColorPickBtnTrue() {
  handleGayBtnfalse()
  handleColorPickBtn = true;
  colorPickContainer.style.boxShadow = '0px 0px 15px white';
  colorpickPaint();
}

function handleColorPickBtnFalse() {
  handleColorPickBtn = false;
  colorPickContainer.style.boxShadow = '0px 0px 4px white';
}

function colorPicker(e) {
  if (isMouseDown) {
    const colorValue = `${colorPick.value}`;
    e.target.style.backgroundColor = colorValue;
  }
}

function colorpickPaint() {
  if (handleColorPickBtn) {
    let cell = document.querySelectorAll('.cell');
    cell.forEach((square) => {
      square.addEventListener('mousedown', handleMouseDown);
      square.addEventListener('mousemove', (e) => { colorPicker(e) });
      square.addEventListener('mouseup', handleMouseUp);
    });
  }
}

//Shading Config

// let shading = document.getElementById('buttonShading');
// shading.addEventListener('click', handleShadingBtnTrue)
// let buttonShadingActive = false;

// function handleShadingBtnTrue() {
//   handleGayBtnfalse()
//   handleColorPickBtnFalse()
//   buttonShadingActive = true;
//   shading.style.border = '7px solid #eb9e22';
//   shading.style.boxShadow = '0px 0px 15px white';
//   shading.style.fontSize = '26px';
//   shadingPaint();
// }
// function handleShadingBtnfalse() {
//   buttonShadingActive = false;
//   shading.style.border = '5px solid #eb9e22';
//   shading.style.boxShadow = '0px 0px 4px white';
//   shading.style.fontSize = '25px';
// }

// function shadingPaint() {
//   if (buttonShadingActive) {
//     let cell = document.querySelectorAll('.cell');
//     cell.forEach((square) => {
//       square.addEventListener('mousedown', handleMouseDown);
//       square.addEventListener('mouseover', (e) => { shader(e) });
//       square.addEventListener('mouseup', handleMouseUp);
//     });
//   }
//   console.log('shading')
// }
// function shader(e) {
//   if (isMouseDown) {
//     //Incompleto 
//   }
// }

//Slider Config

let slider = document.querySelector('.slider');
function sliderStyle() {

  let sliderText = document.querySelector('.sliderText');
  sliderText.textContent = `${slider.value} X ${slider.value}`;
  sliderText.style.color = '#8d8d8e';
  sliderText.style.textAlign = 'center';
  sliderText.style.marginTop = '100px';
}
sliderStyle();

slider.addEventListener('input', function () {
  let squares = document.querySelectorAll('.cell');
  squares.forEach(square => {
    square.remove();
    sliderStyle();
  })
  gridCreator(this.value);
  gayButton.style.boxShadow = '0px 0px 4px white';
  colorPickContainer.style.boxShadow = '0px 0px 4px white';
})

let clearButton = document.getElementById('buttonClear');
clearButton.addEventListener('click', function () {
  location.reload()
})


