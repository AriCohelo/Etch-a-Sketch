
const gridContainer = document.querySelector('#gridContainer')
function gridCreator(num) {

  const squareSize = 70 / num;
  for (let i = 0; i < num; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('rowDiv');
    gridContainer.appendChild(rowDiv);

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
      e.target.style.backgroundColor = 'black';
    }
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







