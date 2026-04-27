const showAll = document.getElementById("show-all");
const showFrontend = document.getElementById("show-frontend");
const showBackend = document.getElementById("show-backend");
const showTool = document.getElementById("show-tool");
const showlibrary = document.getElementById("show-library");
const showFramework = document.getElementById("show-framework");

const frontendBlocks = document.getElementsByClassName("frontend");
const backendBlocks = document.getElementsByClassName("backend");
const toolBlocks = document.getElementsByClassName("tool");
const libraryBlocks = document.getElementsByClassName("library");
const frameworkBlocks = document.getElementsByClassName("framework");
const JavaScript = document.getElementById("Java-Script");
const TypeScript = document.getElementById("Type-Script");

let javaScriptSkills = document.getElementById("javascript-skills-text");

function setDisplay(elements, display) {
  for (let el of elements) {
    el.style.display = display;
  }
}

showAll.onclick = () => {
  showAll.style.boxShadow = "0 0 10px";
  showFrontend.style.boxShadow = "0 0 0px";
  showBackend.style.boxShadow = "0 0 0px";
  showTool.style.boxShadow = "0 0 0px";
  showlibrary.style.boxShadow = "0 0 0px";
  setDisplay(frontendBlocks, "flex");
  setDisplay(backendBlocks, "flex");
  setDisplay(toolBlocks, "flex");
  setDisplay(libraryBlocks, "flex");
  setDisplay(frameworkBlocks, "flex");
};

showFrontend.onclick = () => {
  JavaScript.className = "";
  JavaScript.classList.add("col-lg-2", "col-5", "experience-block", "frontend");
  TypeScript.className = "";
  TypeScript.classList.add("col-lg-2", "col-5", "experience-block", "frontend"); //Aufpassen, wegen Bootstrap Responsive sm
  showAll.style.boxShadow = "0 0 0px";
  showFrontend.style.boxShadow = "0 0 10px";
  showBackend.style.boxShadow = "0 0 0px";
  showTool.style.boxShadow = "0 0 0px";
  showlibrary.style.boxShadow = "0 0 0px";
  setDisplay(frontendBlocks, "flex");
  setDisplay(backendBlocks, "none");
  setDisplay(toolBlocks, "none");
  setDisplay(libraryBlocks, "none");
  setDisplay(frameworkBlocks, "none");
};

showBackend.onclick = () => {
  JavaScript.className = "";
  JavaScript.classList.add("col-lg-2", "col-5", "experience-block", "backend");
  TypeScript.className = "";
  TypeScript.classList.add("col-lg-2", "col-5", "experience-block", "backend");
  showAll.style.boxShadow = "0 0 0px";
  showFrontend.style.boxShadow = "0 0 0px";
  showBackend.style.boxShadow = "0 0 10px";
  showTool.style.boxShadow = "0 0 0px";
  showlibrary.style.boxShadow = "0 0 0px";
  setDisplay(frontendBlocks, "none");
  setDisplay(backendBlocks, "flex");
  setDisplay(toolBlocks, "none");
  setDisplay(libraryBlocks, "none");
  setDisplay(frameworkBlocks, "none");
};

showTool.onclick = () => {
  showAll.style.boxShadow = "0 0 0px";
  showFrontend.style.boxShadow = "0 0 0px";
  showBackend.style.boxShadow = "0 0 0px";
  showTool.style.boxShadow = "0 0 10px";
  showlibrary.style.boxShadow = "0 0 0px";
  setDisplay(frontendBlocks, "none");
  setDisplay(backendBlocks, "none");
  setDisplay(toolBlocks, "flex");
  setDisplay(libraryBlocks, "none");
  setDisplay(frameworkBlocks, "none");
};

showlibrary.onclick = () => {
  showAll.style.boxShadow = "0 0 0px";
  showFrontend.style.boxShadow = "0 0 0px";
  showBackend.style.boxShadow = "0 0 0px";
  showTool.style.boxShadow = "0 0 0px";
  showlibrary.style.boxShadow = "0 0 10px";
  setDisplay(frontendBlocks, "none");
  setDisplay(backendBlocks, "none");
  setDisplay(toolBlocks, "none");
  setDisplay(libraryBlocks, "flex");
  setDisplay(frameworkBlocks, "none");
};

showFramework.onclick = () => {
  showAll.style.boxShadow = "0 0 0px";
  showFrontend.style.boxShadow = "0 0 0px";
  showBackend.style.boxShadow = "0 0 0px";
  showTool.style.boxShadow = "0 0 0px";
  showlibrary.style.boxShadow = "0 0 0px";
  showFramework.style.boxShadow = "0 0 10px";
  setDisplay(frontendBlocks, "none");
  setDisplay(backendBlocks, "none");
  setDisplay(toolBlocks, "none");
  setDisplay(libraryBlocks, "none");
  setDisplay(frameworkBlocks, "flex");
};
