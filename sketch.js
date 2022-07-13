const container = document.querySelector('#container');

//boxNum would be given as an input
let boxNum;

//pixNum is the total pixel(here: 960px) / boxNum 
let pixNum = 960 / boxNum;

function createGrid(number){
    for (let i = 0; i < number; i++){
        const box = document.createElement('canvas');
        box.setAttribute('class', 'box'); // sets the class name of each grid as 'boxes'
        document.getElementsByClassName('box').style.height = `${960/number}px`;
        document.getElementsByClassName('box').style.width = `${960/number}px`;
        container.appendChild(box)
    }
}

createGrid(16)