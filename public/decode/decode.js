if (document.cookie === "") {
  alert("Redirecting you to the login page...");
  window.location.replace("earthmite/D-E/public/login/login.html");
} // An API call will be made here eventually to verify the integrity of the CSRFToken.
