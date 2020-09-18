const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-group error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-group success';
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, `Email is not valid`)
    }
}

function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2, `Password is not match`)
    }
}


function checkRequaried(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFileName(input)} is requared`)
        } else {
            showSuccess(input)
        }
    })
}

function checkLenght(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFileName(input)} must be at least ${min} charekters`)
    } else if (input.value.length > max) {
        showError(input, `${getFileName(input)} must be  less than ${max} charekters`)
    } else {
        showSuccess(input)
    }
}

function getFileName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequaried([username, email, password, password2]);
    checkLenght(username, 3, 15);
    checkLenght(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password,password2)
})