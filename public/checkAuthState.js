function checkAuthState() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navbar = document.getElementById("navbar");

  console.log(isLoggedIn);

  if (!isLoggedIn || Boolean(isLoggedIn) !== true) {
    navbar.style.display = "none";
    window.location.href = "/login";
  }
}

checkAuthState();
