'use strict'

const firstNameFeild = document.querySelector('#firstName');
const lastNameFeild = document.querySelector('#lastName');
const emailFeild = document.querySelector('#email');
const passwordFeild = document.querySelector('#password');
const confirmPasswordFeild = document.querySelector('#ConfirmPassword');
const form = document.querySelector('form');

form.addEventListener('submit', function(event)  {
    event.preventDefault();
    console.log(firstNameFeild.value);
    console.log(lastNameFeild.value);
    console.log(emailFeild.value);
    console.log(passwordFeild.value);
    console.log(confirmPasswordFeild.value);
    if(passwordFeild.value !== confirmPasswordFeild.value){
          alert('password not macth');
    }
    else{
        console.log(done)
    }
})





