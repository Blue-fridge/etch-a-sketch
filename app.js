/* eslint-disable linebreak-style */
const amountOfGrids = 16 * 16;
const sketchBox = document.getElementById('sketch-pad');

function creatediv() {
  const grid = document.createElement('div');
  grid.className = 'grid';
  sketchBox.appendChild(grid);
}

for (let i = 0; i <= amountOfGrids - 1; i += 1) {
  creatediv();
}

function changeBackground(e) {
  const gridColor = document.getElementsByClassName('grid');
  gridColor.style.backgroundColor = 'white'; // this line is probably the problem

  console.log('boo-hooo');
}

document.querySelector('.grid').addEventListener('mouseover', changeBackground);

//i want background color of divs to change when i hover over them


//how do i add a single add event listner to multiple divs

/*

context:
I'm doing step 3 of the "etch a sketch" project on The Odin  Project.
i want the background color of divs to change when i hover over them.

how do i add an event listener to multiple divs (about 256 divs)? I googled it and tried using for loops but that didn't work so I removed it and I've tried some other things that didn't work either. the closest I've gotten was the event listener worked but the function didn't change the background color.  and that brings me here
problem:
the background color is not changing when I hover over  it

const amountOfGrids = 16 * 16;
const sketchBox = document.getElementById('sketch-pad');

function creatediv() {
 const grid = document.createElement('div');
 grid.className = 'grid';
 sketchBox.appendChild(grid);
}

for (let i = 0; i <= amountOfGrids - 1; i += 1) {
 creatediv();
}

function changeBackground(e) {
 const gridColor = document.getElementsByClassName('grid');
 gridColor.style.backgroundColor = 'white'; // this line is probably the problem
}

document.querySelector('.grid').addEventListener('mouseover', changeBackground);

*/