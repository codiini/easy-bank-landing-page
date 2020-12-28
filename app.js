const hamburger = document.getElementById("hamburger-menu");
const smallMenu = document.getElementById("small-menu");
const overlay = document.getElementById("header");
const bodyOverlay = document.body;

hamburger.addEventListener("click", () => {
  if (hamburger.getAttribute("src") === "./images/icon-hamburger.svg") {
    smallMenu.classList.add("mobile_menu");
    hamburger.setAttribute("src", "./images/icon-close.svg");
    overlay.classList.add("overlay");
  } else {
    hamburger.setAttribute("src", "./images/icon-hamburger.svg");
    smallMenu.classList.remove("mobile_menu");
    overlay.classList.remove("overlay");

  }
});
