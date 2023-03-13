const container = document.querySelector('.container_table');
const gridSize = document.querySelector('.grid_size');
const gridSelector = document.querySelector("input[name='grid']");
const color = document.querySelector('.color');
const reset = document.querySelector('.reset');

let gridSelectorNumber = gridSelector.valueAsNumber;
gridSize.textContent = gridSelectorNumber + ' x ' + gridSelectorNumber;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

reset.onclick = restart;
gridSelector.addEventListener('change', changeGrid);


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

function changeBackgroud(e){   
    if (e.type === 'mouseenter' && !mouseDown) return
    this.style.backgroundColor = color.value;
}

function restart(){
    let divs = document.querySelectorAll('.grid-element');
    console.log(divs);
    divs.forEach( div => div.style.backgroundColor = '#ffffff');
}

function changeGrid(){
    gridSelectorNumber = this.valueAsNumber;
    gridSize.textContent = gridSelectorNumber + ' x ' + gridSelectorNumber;
    container.innerHTML = ''; 
    createGrid(gridSelectorNumber);
} 
createGrid(gridSelectorNumber);

















