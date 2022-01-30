const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const CSRFToken = getRandomCSRFToken();

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "SekritString" && password === "PleaseHelpMe") {
    alert("You have successfully logged in.");
    document.cookie += `CSRFToken=${CSRFToken}`;
    window.location.replace("/public/login/main.html");
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});

function getRandomCSRFToken() {
  let CSRFTokenArr = [];
  for (i = 0; i < 15; i++) {
    CSRFTokenArr.push(Math.floor(Math.random() * (0, 10) + 0));
  }
  return CSRFTokenArr.join("");
}
