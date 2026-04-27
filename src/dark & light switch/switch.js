const switchInputPC = document.getElementById("input1-pc");
const switchInputMobile = document.getElementById("input1-mobile");
const root = document.documentElement;
const imageMusic = document.getElementById("Music-pic");
const imageController = document.getElementById("Controller-pic");
const textInSliderPC = document.querySelector("#switchbox #text-in-switch");
const textInSliderMobile = document.querySelector(
  "#switchbox-mobile #text-in-switch"
);
const headings = document.querySelectorAll("h1");

function toggleTheme() {
  const isChecked = switchInputPC.checked || switchInputMobile.checked;
  if (isChecked) {
    headings.forEach((h1) => {
      h1.style.setProperty(
        "text-shadow",
        "0 0 20px currentColor, 0 0 40px currentColor"
      );
    });
    root.style.setProperty("--main-color", "black");
    root.style.setProperty("--main-background-color", "white");
    imageMusic.src = "assets/img/Music black.png";
    imageController.src = "assets/img/Controller black.png";
    if (textInSliderPC)
      textInSliderPC.style.setProperty("justify-content", "flex-start");
    if (textInSliderMobile)
      textInSliderMobile.style.setProperty("justify-content", "flex-start");
    if (textInSliderPC) textInSliderPC.textContent = "light";
    if (textInSliderMobile) textInSliderMobile.textContent = "light";
  } else {
    headings.forEach((h1) => {
      h1.style.setProperty(
        "text-shadow",
        "0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;"
      );
    });
    root.style.setProperty("--main-color", "white");
    root.style.setProperty("--main-background-color", "black");
    imageMusic.src = "assets/img/Music white.png";
    imageController.src = "assets/img/Controller White.png";
    if (textInSliderPC)
      textInSliderPC.style.setProperty("justify-content", "flex-end");
    if (textInSliderMobile)
      textInSliderMobile.style.setProperty("justify-content", "flex-end");
    if (textInSliderPC) textInSliderPC.textContent = "dark";
    if (textInSliderMobile) textInSliderMobile.textContent = "dark";
  }
}

function syncCheckboxes(sourceCheckbox, targetCheckbox) {
  targetCheckbox.checked = sourceCheckbox.checked;
}

switchInputPC.addEventListener("change", function () {
  syncCheckboxes(switchInputPC, switchInputMobile);
  toggleTheme();
});

switchInputMobile.addEventListener("change", function () {
  syncCheckboxes(switchInputMobile, switchInputPC);
  toggleTheme();
});
