const container = document.querySelector('.container');

const createGrid = (grid) =>{
    squareGrid = grid * grid;
    let i = 0;
    while (i < squareGrid){
        let div = document.createElement('div');
        div.classList.add('grid-element');
        div.classList.add('grid-'+i);
        container.appendChild(div);
        i++;
    }
}
createGrid(16);

const gridElements = document.querySelectorAll('div.grid-element');
function changeBackgroud(){
    this.classList.add('hoverd');
    this.removeEventListener('mouseenter', changeBackgroud);
}

gridElements.forEach( element => element.addEventListener('mouseenter', changeBackgroud))
