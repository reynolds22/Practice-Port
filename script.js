const username = document.querySelector('.username')
const email = document.querySelector('.email')
const password1 = document.querySelector('.password1')
const password2 = document.querySelector('.password2')
const submit = document.querySelector('.submit')

const usernameMessage = document.querySelector('.user-msg')
const emailMessage = document.querySelector('.email-msg')
const password1Message = document.querySelector('.password1-msg')
const password2Message = document.querySelector('.password2-msg')

submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (username.value === '' && email.value === '' && password1.value === '' && password2.value === ''){
        alert("Please fill all fields")
    }

    if (username.value === ""){
        showMessage(usernameMessage, "Please Provide Name", 'red');
    }
    else {
        showMessage(usernameMessage, "Nice Name!", 'green')
    }

    if (email.value === ""){
        showMessage(emailMessage, "Please Provide email", 'red');
    }
    else {
        showMessage(emailMessage, "Good", 'green')
    }

    if (password1.value === ""){
        showMessage(password1Message, "Please Provide Password", 'red');
    }
    else {
        showMessage(password1Message, "Valid", 'green')
    }

    if (password2.value === ""){
        showMessage(password2Message, "Please Confirm Your Password", 'red');
    }
    else if (password1.value !== password2.value){
        showMessage(password2Message, "Password Does Not Match", 'red')
    }
    else {
        showMessage(password2Message, "Valid", 'green')
    }
});

function showMessage(element, msg, color){
    element.style.visibility = "visible";
    element.textContent = msg;
    element.style.color = color;
    element.previousElementSibling.style.border = `2px solid ${color}`;
}
