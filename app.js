/* eslint-disable linebreak-style */
const sketchBox = document.querySelector('#sketch-pad');
let gridColumns = 16;
let gridRows = 16;
sketchBox.style.setProperty('grid-template-columns', `repeat(${gridColumns}, auto)`);
sketchBox.style.setProperty('grid-template-rows', `repeat(${gridRows}, auto)`);

let horizontalGrids = 16;
let verticleGrids = horizontalGrids;
const amountOfGrids = horizontalGrids * verticleGrids;

for (let i = 1; i <= amountOfGrids; i += 1) {
  const div = document.createElement('div');
  div.className = 'grid';
  sketchBox.appendChild(div);
};

function changeBackground(e) {
  e.currentTarget.style.backgroundColor = 'black';
}

const grids = document.querySelectorAll('.grid');
grids.forEach(function(grid){
grid.addEventListener("mouseover", changeBackground);
});


const btn = document.querySelector('.demo');
btn.addEventListener('click', askPrompt);

function askPrompt(){
  const grid = document.querySelectorAll('.grid');
  grid.forEach((grid) => { grid.remove();})

  let num = prompt('number')
  let conv = parseInt(num, 10);

  for (let i = 1; i <= conv * conv; i += 1) {
    const div = document.createElement('div');
    div.className = 'grid';
    sketchBox.appendChild(div);
  }

  const gridColor = document.querySelectorAll('.grid')
  gridColor.forEach(function(grid){
  grid.addEventListener("mouseover", changeBackground);
  });

  sketchBox.style.setProperty('grid-template-columns', `repeat(${conv}, auto)`);
  sketchBox.style.setProperty('grid-template-rows', `repeat(${conv}, auto)`);

}





















/* 

///////////////////////// figure out why you cant acess gloabl variable from function
function creatediv() {
  const createGrid = document.createElement('div');
  createGrid.className = 'grid';
  sketchBox.appendChild(createGrid);
}

function changeBackground(e) {
  e.currentTarget.style.backgroundColor = 'black';
}

const select = document.querySelector('#select-pad-size');
select.addEventListener('change', changePadSize);

function changePadSize(e){
  if (select.value === 'small size') {
    smallSize(smallgrid);
    let drrr = select.value;
  } else if (select.value === 'medium size') {
    midSize(midgrid);
  } else if (select.value === 'large size') {
    largeSize();
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
//select.addEventListener('change', changePadSize);


/*  might use
const sketchPadSize = document.querySelector('.sketch-pad-size');
const smallPad = document.querySelector('.small-size-pad');
const mediumPad = document.querySelector('.medium-size-pad');
const largePad = document.querySelector('.large-size-pad');

const fitPageBtn = document.querySelector('.full-page-pad'); // add event listener to set pad to full page
 


function smallSize(para) {


for (let i = 1; i <= finalPadSize; i += 1) {
  const fo = document.querySelectorAll('div');
  fo.forEach((fo) => { 
    fo.remove(); 

  });
 console.log(document.querySelectorAll('.grid'));
}

for (let i = 1; i <= finalPadSize; i += 1) {
  creatediv();
}

  const select = document.querySelector('#select-pad-size');
  select.addEventListener('change', changePadSize);
  let horizontalGrids = para;
  let verticleGrids = horizontalGrids;
  const finalPadSize = horizontalGrids * verticleGrids;

  sketchBox.style.setProperty('grid-template-columns', `repeat(${horizontalGrids}, auto)`);
  sketchBox.style.setProperty('grid-template-rows', `repeat(${horizontalGrids}, auto)`);



  const grids = document.querySelectorAll('.grid');
  grids.forEach((grid) => { grid.addEventListener('mouseover', changeBackground); });
}

function midSize(mara) {
  const select = document.querySelector('#select-pad-size');
  select.addEventListener('change', changePadSize);
  let horizontalGrids = mara;
  const verticleGrids = horizontalGrids;
  const finalPadSize = horizontalGrids * verticleGrids;
  sketchBox.style.setProperty('grid-template-columns', `repeat(${horizontalGrids}, auto)`);
  sketchBox.style.setProperty('grid-template-rows', `repeat(${horizontalGrids}, auto)`);

  for (let i = 1; i <= finalPadSize; i += 1) {
    creatediv();
  }

  const grids = document.querySelectorAll('.grid');
  grids.forEach((grid) => { grid.addEventListener('mouseover', changeBackground); });
  console.log(document.querySelectorAll('.grid'));
}

function largeSize() {
   horizontalGrids = 64;
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


const buton = document.querySelector('.small-size-pad');
buton.addEventListener('click', () => { smallSize(smallgrid)});



/* const fo = document.querySelectorAll('div');
fo.forEach((fo) => { fo.remove(); console.log('bbb')});
console.log(document.querySelectorAll('.grid')); 

function rdel(){
    const fo = document.querySelectorAll('div');
 fo.forEach((fo) => { fo.remove(); 
});
console.log(document.querySelectorAll('.grid'));
} 



/* if (sketchBox){
  console.log(sketchBox.innerHTML);
} else {
  console.log('none');
} 
*/