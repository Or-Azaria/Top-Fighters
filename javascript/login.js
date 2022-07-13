let emailInput = document.querySelector("#typeEmailX");
let passwordInput = document.querySelector("#typePasswordX");
let btn = document.querySelector("button");

localStorage.setItem("Email", "or9236302@gmail.com");
localStorage.setItem("Password", "9236");

btn.addEventListener("click", function () {
  if (
    emailInput.value == "or9236302@gmail.com" &&
    passwordInput.value == "9236"
  ) {
    window.location.href = "preload.html";
  } else {
    alert("Hey put the correct details!");
  }
});
