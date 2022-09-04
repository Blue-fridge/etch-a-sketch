/* eslint-disable linebreak-style */
const sketchPad = document.querySelector('#sketch-pad');
let gridColumns = 16;
let gridRows = 16;
sketchPad.style.setProperty('grid-template-columns', `repeat(${gridColumns}, auto)`);
sketchPad.style.setProperty('grid-template-rows', `repeat(${gridRows}, auto)`);

let horizontalGrids = 16;
let verticleGrids = horizontalGrids;
const amountOfGrids = horizontalGrids * verticleGrids;

for (let i = 1; i <= amountOfGrids; i += 1) {
  const div = document.createElement('div');
  div.className = 'grid';
  sketchPad.appendChild(div);
}

function changeGridBackground(e) {
  e.currentTarget.style.backgroundColor = 'black';
}

const grids = document.querySelectorAll('.grid');
grids.forEach((grid) => {
  grid.addEventListener('mouseover', changeGridBackground);
});

function setGridSize() {
  grids.forEach((grid) => { grid.remove(); });

  let askNumber = prompt('number')
  let stringToNum = parseInt(askNumber, 10);

  for (let i = 1; i <= stringToNum * stringToNum; i += 1) {
    const div = document.createElement('div');
    div.className = 'grid';
    sketchPad.appendChild(div);
  }

  const gridColor = document.querySelectorAll('.grid');
  gridColor.forEach((grid) => {
    grid.addEventListener('mouseover', changeGridBackground);
  });

  sketchPad.style.setProperty('grid-template-columns', `repeat(${stringToNum}, auto)`);
  sketchPad.style.setProperty('grid-template-rows', `repeat(${stringToNum}, auto)`);
}

function getRandomColors(e) {
  const symbols = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += symbols[Math.floor(Math.random() * 16)]
  }
  e.currentTarget.style.backgroundColor = color;
}

const randomColor = document.querySelector('.random-color');
randomColor.addEventListener('click', () => {
  grids.forEach((grid) => {
    grid.addEventListener('mouseover', getRandomColors);
  });
});
