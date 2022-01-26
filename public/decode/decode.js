if (document.cookie === "") {
  alert("Redirecting you to the login page...");
  window.location.replace("http://localhost:3000/login");
} // An API call will be made here eventually to verify the integrity of the CSRFToken.
