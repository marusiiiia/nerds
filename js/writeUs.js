const footerButton = document.querySelector(".footer-button");
const inputs = document.querySelectorAll(".write-us-input");
const writeUs = document.querySelector(".write-us");
const crossButton = document.querySelector(".close-cross-button");
const form = document.querySelector(".write-us-form");
let islocalStorageSupport = true;
let loginFromStorage = "";
const sliderToggle = document.querySelector(".slider-toggle");

try {
  loginFromStorage = localStorage.getItem("login");
} catch (err) {
  islocalStorageSupport = false;
}

footerButton.addEventListener("click", function () {
  writeUs.classList.toggle("be-visible");
  if (loginFromStorage) {
    inputs[0].value = loginFromStorage;
    inputs[1].focus();
  } else {
    inputs[0].focus();
  }
});

crossButton.addEventListener("click", function () {
  writeUs.classList.toggle("be-visible");
  writeUs.classList.remove("jump-class");
});

form.addEventListener("submit", function (evt) {
  if (!inputs[0].value || !inputs[1].value) {
    evt.preventDefault();
    writeUs.classList.remove("jump-class");
    writeUs.offsetWidth = writeUs.offsetWidth;
    writeUs.classList.add("jump-class");
  } else {
    if (islocalStorageSupport) localStorage.setItem("login", inputs[0].value);
    writeUs.classList.remove("jump-class");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    writeUs.classList.remove("be-visible");
    writeUs.classList.remove("jump-class");
  }
});
