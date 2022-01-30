if (document.cookie === "") {
  alert("Redirecting you to the login page...");
  window.location.replace("../login-page.html");
} // An API call will be made here eventually to verify the integrity of the CSRFToken.
