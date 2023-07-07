
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
}

