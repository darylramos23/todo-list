'use strict'


var _ = require('lodash');

const inputText = document.querySelector('.input-text');
const enterButton = document.querySelector('.enter-button');
const unorderedList = document.getElementById('item-list');
let increment = 0;



function createElement(){
  if(inputText.value){
    let newList = document.createElement('li');
    let newButton = document.createElement('button');
    let newSpan = document.createElement('span')
    newSpan.textContent = inputText.value;
    newSpan.className = `${inputText.value}a${increment} li-width`
    newButton.className = `${inputText.value+increment} delete-color`;
    newButton.textContent = 'Delete';
    unorderedList.appendChild(newList);
    newList.appendChild(newSpan);
    newList.appendChild(newButton);
    let deleteButton = inputText.value+increment;
    let spanName = inputText.value+'a'+increment;
    
    document.querySelector(`.${deleteButton}`).addEventListener('click',function(){
      document.querySelector(`.${deleteButton}`).parentElement.remove();
    });

    document.querySelector(`.${spanName}`).addEventListener('click',function(){
      document.querySelector(`.${spanName}`).classList.add('strikethrough');
    });
    increment++; 
    inputText.value = "";
  } 
}


enterButton.addEventListener('click',createElement);

document.addEventListener('keypress',function(keyObject){
    if(inputText === document.activeElement && keyObject.key === 'Enter') createElement();
  //document.activeElement irereturn nito yung clinick mo na element.
})



