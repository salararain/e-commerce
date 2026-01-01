'use strict';

const userName = document.querySelector('#username');
const password = document.querySelector('#password');
const form = document.querySelector('form');
const userNameRequiredLabel = document.querySelector('.requiredLabel');
const passwordRequiredLabel = document.querySelector('#passwordRequriedLable');

const icon = document.getElementById("togglePassword");
const passwordRegex = /^(?=.*\d).{8,}$/;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let isPasswordCorrect = false;
    let isUserNameCorrect = false;

    // username check
    if (userName.value === '') {
        userNameRequiredLabel.style.display = 'inline';
    } else {
        userNameRequiredLabel.style.display = 'none';
        isUserNameCorrect = true;
    }

    // password check
    if (password.value === '') {
        passwordRequiredLabel.innerText = 'Password is required!';
        passwordRequiredLabel.style.display = 'inline';
    } else if (!passwordRegex.test(password.value)) {
        passwordRequiredLabel.innerText =
            'Password must be 8 chars, upper, lower, number & special char';
        passwordRequiredLabel.style.display = 'inline';
    } else {
        passwordRequiredLabel.style.display = 'none';
        isPasswordCorrect = true;
    }

    // next page
    if (isUserNameCorrect && isPasswordCorrect) {
        window.location.href = './home.html';
    }
});

icon.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        password.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});

