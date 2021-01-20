const submitBtn = document.querySelector("#contact form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const navBar = document.querySelector("nav.navbar");


window.addEventListener("load", () => {
  navBar.classList.add("fixed-top")
})

window.addEventListener("scroll", () => {
  if (window.scrollY <= 4) {
    navBar.classList.add("fixed-top");
  }
  else if (window.scrollY > 300) {
    navBar.classList.add("fixed-top", "darkbar");
  }
  else {
    navBar.classList.remove("fixed-top", "darkbar")
  }
})
