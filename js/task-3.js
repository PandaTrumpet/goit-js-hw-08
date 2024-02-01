'use strict'
const inputs = document.querySelector('#name-input')

const output = document.querySelector('#name-output');

inputs.addEventListener('input', (even) => {
    if(even.currentTarget.value === "") {
        output.textContent = "Anonymous"
    } else {
        output.textContent = even.currentTarget.value.trim()
    }
 
    
})