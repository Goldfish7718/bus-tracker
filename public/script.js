const wrapper = document.querySelector(".wrapper");
const resgisterLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");

resgisterLink.onclick = () => {
  wrapper.classList.add("active");
};

loginLink.onclick = () => {
  wrapper.classList.remove("active");
};
