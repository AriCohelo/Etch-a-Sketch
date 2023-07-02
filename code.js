
const container = document.querySelector('#container')
function gridCreator(num) {
    const squareSize = 400 / num;
    for (let i = 0; i < num; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('rowDiv');
        container.appendChild(rowDiv);
        
        for (let j = 0; j < num; j++) {
            let columnDiv = document.createElement('div');
            columnDiv.classList.add('columnDiv');
            columnDiv.style.width = `${squareSize}px`;
            columnDiv.style.height = `${squareSize}px`;
            rowDiv.appendChild(columnDiv);
        }
            }
}
gridCreator(8)

let prueba = document.createElement('div');
prueba.style.width = ('100px')
prueba.style.height = ('100px')
prueba.style.border = ('3px solid black')
container.appendChild(prueba)
let hijaPrueba = document.createElement('div');
hijaPrueba.style.width = ('50px')
hijaPrueba.style.height = ('50px')
hijaPrueba.style.border = ('3px solid black')

prueba.appendChild(hijaPrueba)


  









// function createGrid(num) {
//         const container = document.getElementById("container");
//         const squareSize = 400 / num;
//         for (let i = 0; i < num; i++) {
//             const row = document.createElement("div");
//             row.classList.add("grid-row");
//             for (let j = 0; j < num; j++) {
//                 const cell = document.createElement("div");
//                 cell.classList.add("grid-item");
//                 cell.style.width = `${squareSize}px`;
//                 cell.style.height = `${squareSize}px`;
//                 row.appendChild(cell);
//             }
//             container.appendChild(row);
//         }
//     }
    
//     createGrid(8);