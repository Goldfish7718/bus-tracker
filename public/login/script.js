const wrapper = document.querySelector(".wrapper");
const resgisterLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");

document
  .getElementById("signUpButton")
  .addEventListener("click", requestSignUp);

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
    alert(response.message);
  }
}
