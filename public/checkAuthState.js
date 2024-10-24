function checkAuthState() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  console.log(isLoggedIn);

  if (!isLoggedIn) {
    window.location.href = "/login";
  }
}

checkAuthState();
