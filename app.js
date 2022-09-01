/* eslint-disable linebreak-style */
const sketchBox = document.querySelector('#sketch-pad');
const defaultSize = midSize();

function creatediv() {
  const createGrid = document.createElement('div');
  createGrid.className = 'grid';
  sketchBox.appendChild(createGrid);
}

function changeBackground(e) {
  e.currentTarget.style.backgroundColor = 'white';
}

const select = document.querySelector('#select-pad-size');

function changePadSize(e){
  if (select.value === 'small size') {
    smallSize();
    //console.log(horizontalGrids);
  } else if (select.value === 'medium size') {
    midSize()
  } else if (select.value === 'large size') {
    largeSize()
  } else{
    console.log('idk')
  }

 // kick()
}

/* function kick(){


  //let finalPadSize = horizontalGrids * verticleGrids;

  for (let i = 1; i <= finalPadSize; i += 1) {
    creatediv();
  }

  const grids = document.querySelectorAll (".grid");
  grids.forEach(function(grid){
  grid.addEventListener("mouseover", changeBackground);
  });

}
 */
select.addEventListener('change', changePadSize);




/*  might use
const sketchPadSize = document.querySelector('.sketch-pad-size');
const smallPad = document.querySelector('.small-size-pad');
const mediumPad = document.querySelector('.medium-size-pad');
const largePad = document.querySelector('.large-size-pad');

const fitPageBtn = document.querySelector('.full-page-pad'); // add event listener to set pad to full page
 */

function smallSize() {
  const horizontalGrids = 8;
  const verticleGrids = horizontalGrids;
  const finalPadSize = horizontalGrids * verticleGrids;
  sketchBox.style.setProperty('grid-template-columns', `repeat(${horizontalGrids}, auto)`);
  sketchBox.style.setProperty('grid-template-rows', `repeat(${horizontalGrids}, auto)`);

  for (let i = 1; i <= 8 * 8; i += 1) {
    creatediv();
  }

  const grids = document.querySelectorAll('.grid');
  grids.forEach((grid) => { grid.addEventListener('mouseover', changeBackground); });
}

function midSize() {
  const horizontalGrids = 16;
  const verticleGrids = horizontalGrids;
  const finalPadSize = horizontalGrids * verticleGrids;
  sketchBox.style.setProperty('grid-template-columns', `repeat(${horizontalGrids}, auto)`);
  sketchBox.style.setProperty('grid-template-rows', `repeat(${horizontalGrids}, auto)`);

  for (let i = 1; i <= finalPadSize; i += 1) {
    creatediv();
  }

  const grids = document.querySelectorAll('.grid');
  grids.forEach((grid) => { grid.addEventListener('mouseover', changeBackground); });
}



function largeSize() {
  const horizontalGrids = 32;
  const verticleGrids = horizontalGrids;
  const finalPadSize = horizontalGrids * verticleGrids;
  sketchBox.style.setProperty('grid-template-columns', `repeat(${horizontalGrids}, auto)`);
  sketchBox.style.setProperty('grid-template-rows', `repeat(${horizontalGrids}, auto)`);

  for (let i = 1; i <= finalPadSize; i += 1) {
    creatediv();
  }

  const grids = document.querySelectorAll('.grid');
  grids.forEach((grid) => { grid.addEventListener('mouseover', changeBackground); });
}
