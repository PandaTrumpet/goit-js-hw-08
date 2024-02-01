'use strict'
const form = document.querySelector('.login-form')



function handler (event) {
    event.preventDefault();
    const emails = form.elements.email.value.trim()
    const passwords = form.elements.password.value.trim()
    const output = {
        email: emails,
        passwords: passwords
    }
if(event.target.email.value === '' || event.target.password.value === ''){
    alert('All form fields must be filled in')
}else {
    console.log(output);
}
form.reset()
}

form.addEventListener('submit', handler)

