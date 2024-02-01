'use strict'
const input = document.querySelector('input')
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const boxContainer = document.querySelector('#boxes')

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  function createBoxes(amount) {
    const boxes = [];
  
    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement('div');
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
      boxContainer.innerHTML = '';
    }
  
    boxContainer.append(...boxes);
  }

  function destroyBoxes() {
    boxContainer.innerHTML = '';
  }


  createBtn.addEventListener('click', () => {
    const amount = input.value;
  
    if (amount > 0 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    } 
    
  });
  
  destroyBtn.addEventListener('click', destroyBoxes);