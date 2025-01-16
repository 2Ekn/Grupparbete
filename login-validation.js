var email = document.getElementById('email').value;
var password = document.getElementById('password');

function validateEmailInput() {
    const emailInput = document.getElementById('email').value;
    const feedbackElement = document.getElementById('emailFeedback');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const submit = document.getElementById('login-button');
  
    if (emailRegex.test(emailInput)) {
      feedbackElement.textContent = "";
      submit.disabled = false;
    }
    else {
      feedbackElement.textContent = "Var vänlig ange en giltig e-postaddress";
      submit.disabled = true;
    }
}