const contactBox = document.getElementById("contact-box");
const contactButton = document.getElementById("contact-button");
const contactContainer = document.getElementById("contact-container");

contactButton.onclick = (event) => {
  contactContainer.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  contactContainer.style.zIndex = "1000";
  contactContainer.style.pointerEvents = "auto";
  contactBox.style.display = "flex";
  event.stopPropagation();
};

document.addEventListener("click", (event) => {
  if (
    contactBox.style.display === "flex" &&
    !contactBox.contains(event.target) &&
    !contactButton.contains(event.target)
  ) {
    contactBox.style.display = "none";
    contactContainer.style.backgroundColor = "";
    contactContainer.style.zIndex = "0";
    contactContainer.style.pointerEvents = "none";
  }
});
