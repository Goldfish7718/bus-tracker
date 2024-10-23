const wrapper = document.querySelector(".wrapper");
const resgisterLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");

resgisterLink.onclick = () => {
  wrapper.classList.add("active");
};

loginLink.onclick = () => {
  wrapper.classList.remove("active");
};

async function requestSignUp() {
  const formData = {
    username: document.getElementById("signUpUsername").value,
    password: document.getElementById("signUpPassword").value,
  };

  console.log(formData);

  const response = await fetch("/api/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    alert("Registration succesfull");
  } else {
    alert("An Error occured");
  }
}
