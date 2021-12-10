let h1 = document.createElement('h1');
h1.id = 'title';
h1.innerText = 'Paleta de Cores';
document.body.appendChild(h1);

let colorPalette = document.createElement('div');
colorPalette.id = 'color-palette';
document.body.appendChild(colorPalette);

for (let i = 0; i < 4; i += 1) {
    let eachColorofPalette = document.createElement('div');
    eachColorofPalette.className = 'color';
    colorPalette.appendChild(eachColorofPalette);
}

let colorsList = ['black', 'violet', 'orange', 'pink'];
let divsList = document.getElementsByClassName('color');
for (let k = 0; k < colorsList.length; k += 1) {
    divsList[k].classList.add('square');
    divsList[k].classList.add(colorsList[k]);
}






//let colorPalette = document.getElementById("color-palette");
//let colors = ["square aquamarine", "square violet", "square orange", "square pink"];

