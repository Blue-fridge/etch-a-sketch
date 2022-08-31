/* eslint-disable linebreak-style */
const amountOfGrids = 16 * 16;
const sketchBox = document.getElementById('sketch-pad');

function creatediv() {
  const createGrid = document.createElement('div');
  createGrid.className = 'grid';
  sketchBox.appendChild(createGrid);
}

for (let i = 0; i < amountOfGrids; i += 1) {
  creatediv();
}

function changeBackground(e) {
  e.currentTarget.style.backgroundColor = 'white';
}

const grids = document.querySelectorAll (".grid");
grids.forEach(function(grid){
  grid.addEventListener("mouseover", changeBackground);
});
