const container = document.querySelector('.container_table');
const gridSelector = document.querySelector("input[name='grid']");
let gridSelectorNumber = gridSelector.valueAsNumber;

const createGrid = (grid) => {
    squareGrid = grid * grid;
    container.style.gridTemplateColumns = `repeat(${grid} ,1fr)`;
    let i = 0;
    while (i < squareGrid){
        let div = document.createElement('div');
        div.classList.add('grid-element');
        div.classList.add('grid-'+i);
        container.appendChild(div);
        i++;
    }
}

function changeBackgroud(){
    this.classList.add('hoverd');
    this.removeEventListener('mouseenter', changeBackgroud);
}

function cb(){
    gridSelectorNumber = this.valueAsNumber;
    container.innerHTML = ''; 
    createGrid(gridSelectorNumber); 
    let gridElements = document.querySelectorAll('.grid-element');
    gridElements.forEach( element => element.addEventListener('mouseenter', changeBackgroud));
}

gridSelector.addEventListener('change', cb);










