function passwordInputToggle() {
  var passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

$(document).ready(() => {
  $('.show-password').click(() => passwordInputToggle());
});
