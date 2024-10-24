function checkAuthState() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navbar = document.getElementById("navbar");

  console.log(isLoggedIn);

  if (!isLoggedIn || Boolean(isLoggedIn) !== true) {
    navbar.style.display = "none";
    window.location.href = "/login";
  }
}

document
  .getElementById("logoutButton")
  .addEventListener("click", requestLogOut);

function requestLogOut(event) {
  event.preventDefault();
  localStorage.removeItem("isLoggedIn");
  window.location.href = "/login";
}

checkAuthState();
