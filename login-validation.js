
document.getElementById('login-screen-form').addEventListener('submit', function(event){
  event.preventDefault();

  const username = document.getElementById('username-login').value;
  const password = document.getElementById('password-login').value;
  

  const validateDenied = document.getElementById('validateDenied');

  const userInfo = JSON.parse(localStorage.getItem(username));

  if(userInfo){
    if(userInfo.password === password && userInfo.username === username){
      window.location.href = `profile.html?username=${username}`;
    } else {
      validateDenied.textContent = "Fel lösenord eller användarnamn";
    }
  } else{
    validateDenied.textContent = "Fel lösenord eller användarnamn";
  }
})