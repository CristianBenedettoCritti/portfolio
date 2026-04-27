const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobile-nav");

function enableDisable() {
  mobileNav.classList.toggle("active");
  mobileNav.classList.toggle("disable");
}

// Schliesst das Brugermenu wenn man auf einen Link klickt
const navLinks = document.querySelectorAll(".mobile-nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobileNav.classList.remove("active");
    mobileNav.classList.add("disable");
  });
});

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "assets/pdf/cv.pdf";
    link.download = "Cristian_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

document.addEventListener("DOMContentLoaded", function () {
  const alleBloecke = document.querySelectorAll(".hobbie-block");
  alleBloecke.forEach((block) => {
    block.addEventListener("click", function (event) {
      event.stopPropagation();
      alleBloecke.forEach((b) => {
        if (b !== block) b.classList.remove("visible");
      });
      this.classList.toggle("visible");
    });
  });
  document.addEventListener("click", function () {
    alleBloecke.forEach((block) => {
      block.classList.remove("visible");
    });
  });
});
