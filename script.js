const container = document.querySelector('.container_table');
const gridSize = document.querySelector('.grid_size');
const gridSelector = document.querySelector("input[name='grid']");
gridSelector.addEventListener('change', changeGrid);

let gridSelectorNumber = gridSelector.valueAsNumber;
gridSize.textContent = gridSelectorNumber + ' x ' + gridSelectorNumber;

const createGrid = (grid) => {
    let squareGrid = grid * grid;
    container.style.gridTemplateColumns = `repeat(${grid} ,1fr)`;
    let i = 0;
    while (i < squareGrid){
        let div = document.createElement('div');
        div.classList.add('grid-element');
        div.addEventListener('mouseenter', changeBackgroud);
        container.appendChild(div);
        i++;
    }
}

function changeBackgroud(){
    this.classList.add('hoverd');
    this.removeEventListener('mouseenter', changeBackgroud);
}

function changeGrid(){
    gridSelectorNumber = this.valueAsNumber;
    gridSize.textContent = gridSelectorNumber + ' x ' + gridSelectorNumber;
    container.innerHTML = ''; 
    createGrid(gridSelectorNumber);
} 
createGrid(gridSelectorNumber);

















