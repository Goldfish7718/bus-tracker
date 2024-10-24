const wrapper = document.querySelector(".wrapper");
const resgisterLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");

document
  .getElementById("signUpButton")
  .addEventListener("click", requestSignUp);

document.getElementById("loginButton").addEventListener("click", requestLogin);

resgisterLink.onclick = () => {
  wrapper.classList.add("active");
};

loginLink.onclick = () => {
  wrapper.classList.remove("active");
};

async function requestSignUp(event) {
  event.preventDefault();
  const formData = {
    username: document.getElementById("signUpUsername").value,
    password: document.getElementById("signUpPassword").value,
  };

  console.log(formData);

  let response = await fetch("/api/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    response = await response.json();
    console.log(response);

    localStorage.setItem("isLoggedIn", true);

    window.location.href = "/";
  } else {
    response = await response.json();
    alert(response.message);
  }
}

async function requestLogin(event) {
  event.preventDefault();
  const formData = {
    username: document.getElementById("loginUsername").value,
    password: document.getElementById("loginPassword").value,
  };

  console.log(formData);

  let response = await fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    response = await response.json();
    console.log(response);

    localStorage.setItem("isLoggedIn", true);

    window.location.href = "/";
  } else {
    response = await response.json();
    alert(response.message);
  }
}

function checkAuthState() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navbar = document.getElementById("navbar");

  console.log(isLoggedIn);

  if (!isLoggedIn || Boolean(isLoggedIn) !== true) {
    navbar.style.display = "none";
  }
}

checkAuthState();
