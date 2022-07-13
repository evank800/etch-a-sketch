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

createGrid(16)