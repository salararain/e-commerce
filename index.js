
'use strict'

const firstNameFeild = document.querySelector('#firstName');
const lastNameFeild = document.querySelector('#lastName');
const emailFeild = document.querySelector('#email');
const passwordFeild = document.querySelector('#password');
const confirmPasswordFeild = document.querySelector('#ConfirmPassword');
const form = document.querySelector('form');
const firstNameRequriedLable = document.querySelectorAll(".requiredLabel")[0];
const emailRequriedLable = document.querySelectorAll(".requiredLabel")[1];
const passwordRequriedLable = document.querySelectorAll(".requiredLabel")[2];
const icon = document.querySelectorAll('#togglePassword')

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const passwordRegex = /^(?=.*\d).{8,}$/;

    let isfirstNamecorrect = true;
    let isemailcorrect = true;
    let isPasswordcorrect = true;

    // First name
    if (firstNameFeild.value === '') {
        firstNameRequriedLable.style.display = 'inline';
        isfirstNamecorrect = false;
    } else {
        firstNameRequriedLable.style.display = 'none';
    }

    // Email
    if (emailFeild.value === '') {
        emailRequriedLable.style.display = 'inline';
        isemailcorrect = false;
    } else {
        emailRequriedLable.style.display = 'none';
    }

    // Password empty
    if (passwordFeild.value === '') {
        passwordRequriedLable.style.display = 'inline';
        passwordRequriedLable.innerText = 'Password is required';
        isPasswordcorrect = false;
    }
    // Password regex
    else if (!passwordRegex.test(passwordFeild.value)) {
        passwordRequriedLable.style.display = 'inline';
        passwordRequriedLable.innerText =
            'Password must be at least 8 chars and contain a number';
        isPasswordcorrect = false;
    } else {
        passwordRequriedLable.style.display = 'none';

    }
    if (passwordFeild.value !== confirmPasswordFeild.value) {
        passwordRequriedLable.style.display = 'inline';
        passwordRequriedLable.innerText = 'password dose not macth'
    }


    if (isPasswordcorrect && passwordFeild.value !== confirmPasswordFeild.value) {
        return; 
    }

    
    if (isfirstNamecorrect && isemailcorrect && isPasswordcorrect) {
        window.location.href = './home.html';
    }
});
const toggleIcons = document.querySelector('#togglePassword');
const togglePassword = document.querySelector('#togglepassword2');

toggleIcons.addEventListener('click', () => {
    if (passwordFeild.type === 'password') {
        passwordFeild.type = 'text'
        toggleIcons.classList.remove('fa-eye');
        toggleIcons.classList.add('fa-eye-slash')
    }
    else {
        passwordFeild.type = 'password'
        toggleIcons.classList.remove('fa-eye-slash');
        toggleIcons.classList.add('fa-eye');
    }
});
togglePassword.addEventListener('click' , () =>{
    if(confirmPasswordFeild.type === 'password'){
        confirmPasswordFeild.type = 'text';
          togglePassword.classList.remove('fa-eye');
        togglePassword.classList.add('fa-eye-slash')
    }
    else{
    confirmPasswordFeild.type = 'password';
       togglePassword.classList.remove('fa-eye-slash');
        togglePassword.classList.add('fa-eye');
    }

    
})
