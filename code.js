
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
// let divs = document.querySelectorAll('div')
// divs.forEach(div => {
//   div.addEventListener('mouseover', changeColor);
// });
// const gayColors = ['228, 3, 3', '255, 140, 0', '	255, 237, 0', '0, 128, 38', '36, 64, 142', '115, 41, 130']

// function changeColor(e) {
//   const random = Math.floor(Math.random() * gayColors.length);
//   const gayColor = `rgb(${gayColors[random]})`;

//   e.target.style.backgroundColor = gayColor
//   console.log('mouseover')
// }