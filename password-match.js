errorMessage = document.querySelector(".errorMessage");

function displayError() {
  password = document.getElementById("password")
  password_confirm = document.getElementById("password-confirm")

  if (password.value == '' || password_confirm.value == '') {
    errorMessage.textContent = "* Passwords do not match"
  }
  else if (password.value  != password_confirm.value) {
    errorMessage.textContent = "* Passwords do not match";
  }
  else {
    errorMessage.textContent = "";
    password.classList.remove("error");
    password_confirm.classList.remove("error");
  }
}

document.addEventListener("keyup", (e) => {
  displayError();
})