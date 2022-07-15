// empty grid at first 
// type in the size
// new grid drawn
//then everytime the button is clicked and the a new grid is given, the page reloads

const container = document.querySelector('#container');

//creates a new grid
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

//Marks the canvases with colour where mouse hovered over 
function toSketch(){
    const hovers = document.querySelectorAll('canvas') // an "array" of elements
    const hover = document.querySelector('canvas'); // an element

    /* hovers.forEach(hover => hover.addEventListener("mouseover", () => {hover.style.background = 'red'})); */
    
    //This is probably better(forEach function to go through the "array" and add eventlistener to each element)
    hovers.forEach(hover => hover.addEventListener("mouseover", function(e){
        hover.style.background = 'black';
    }))
}

//removes the old grid
function removeGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}

//Allows the grid to refresh and change to the given pixels
function refreshGrid(){
    const button = document.querySelector('#grid-size');
    button.addEventListener("click", function(e){
        let gridSize = Number(prompt("size x size (max. 200) \nEnter the grid size"));
        removeGrid();
        createGrid(gridSize);
        toSketch()});
}

refreshGrid();


//additional: - Add css, mouse click and hover?





