const container = document.querySelector('#container');

//boxNum would be given as an input

//pixNum is the total pixel(here: 960px) / boxNum 

function createGrid(boxNum){

    for (let i = 0; i < boxNum; i++){ // column

        const column = document.createElement('div'); //creates a column of boxes
        for(let j = 0; j < boxNum; j++){ // row
            const box = document.createElement('canvas');
            box.style.height = `${960/boxNum}px`; //height of each individual box
            box.style.width = `${960/boxNum}px`;
            column.appendChild(box);
        }
        
        container.appendChild(column);
    }
}


function toSketch(){

    const hovers = document.querySelectorAll('canvas') // an "array" of elements
    const hover = document.querySelector('canvas'); // an element

    /* hovers.forEach(hover => hover.addEventListener("mouseover", () => {hover.style.background = 'red'})); */
    
    //This is probably better(forEach function to go through the "array" and add eventlistener to each element)
    hovers.forEach(hover => hover.addEventListener("mouseover", function(e){
        hover.style.background = 'black';
    }))
}

function chooseGrid(){
    const button = document.querySelector('#grid-size');
    button.addEventListener("click", () => {let gridSize = prompt("Enter the grid size(max.100): ");
        return gridSize});
}

createGrid(100);
toSketch()


