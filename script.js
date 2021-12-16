let h1 = document.createElement('h1');
h1.id = 'title';
h1.innerText = 'Paleta de Cores';
document.body.appendChild(h1);

let colorPalette = document.createElement('div');
colorPalette.id = 'color-palette';
document.body.appendChild(colorPalette);
let espaco = document.createElement('br');
document.body.appendChild(espaco);
document.body.appendChild(espaco);


for (let i = 0; i < 4; i += 1) {
    let eachColorofPalette = document.createElement('div');
    eachColorofPalette.className = 'color';
    colorPalette.appendChild(eachColorofPalette);
}

let cor = document.querySelectorAll('.color');
cor[0].style.backgroundColor = 'black';
cor[1].style.backgroundColor = 'blueviolet';
cor[2].style.backgroundColor = 'darkorange';
cor[3].style.backgroundColor = 'deeppink';
console.log(cor[0]);

let colorSelected = document.querySelector('.color');
colorSelected.classList.add('selected');

let colorsList = ['black', 'violet', 'orange', 'pink'];
let divsList = document.getElementsByClassName('color');
for (let k = 0; k < colorsList.length; k += 1) {
    divsList[k].classList.add('square');
    divsList[k].classList.add(colorsList[k]);

}


let button = document.createElement('button');
button.id = 'clear-board';
button.innerText = 'Limpar';
document.body.appendChild(button);

let buttonBonus = document.createElement('button');
buttonBonus.id = 'generate-board';
buttonBonus.innerText = 'VQV';
document.body.appendChild(buttonBonus)

let input = document.createElement('input');
input.id = 'board-size';
document.body.appendChild(input);
input.setAttribute('type', 'number');
input.setAttribute('min', '1');

/* buttonBonus.addEventListener('click', bonus10);
function bonus10 () {
    if (input.value === '') {
        alert('Board inválido!');
    createPixels(input.value);
} */




let pixelBoard = document.createElement('div');
pixelBoard.id = 'pixel-board';
document.body.appendChild(pixelBoard); 

for (let j = 0; j < 25; j += 1) {
    let pixel = document.createElement('div');
     pixel.classList.add('pixel');
    pixel.classList.add('square');
    pixelBoard.appendChild(pixel);
}




colorPalette.addEventListener('click', selectColor);

function selectColor (event) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
    
}


pixelBoard.addEventListener('click', paintingPixels);

function paintingPixels (event) {
    let paintColor = document.querySelector('.selected');
    event.target.style.backgroundColor = paintColor.style.backgroundColor;

}

button.addEventListener('click',limpar);


function limpar () {
    let pixels = document.getElementsByClassName('pixel');
    for (i = 0; i < 25; i += 1) {
        pixels[i].style.backgroundColor = 'white';
    }
}

 






