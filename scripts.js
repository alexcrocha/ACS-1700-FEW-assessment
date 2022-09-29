const widthInput = document.getElementById("width");
widthInput.value = 100;
const heightInput = document.getElementById("height");
heightInput.value = 100;
const colourInput = document.getElementById("colour");
colourInput.value = "#f12f12";

const widthDisplay = document.getElementById("width-display");
widthDisplay.innerHTML = `${widthInput.value}px`;
const heightDisplay = document.getElementById("height-display");
heightDisplay.innerHTML = `${heightInput.value}px`;
const colourDisplay = document.getElementById("colour-display");
colourDisplay.innerHTML = `${colourInput.value}`;

const box = document.getElementById("box");
console.log(box);
box.style.width = `${widthInput.value}px`;
box.style.height = `${heightInput.value}px`;
box.style.backgroundColor = colourInput.value;

const inputs = document.getElementById("inputs");
const display = document.getElementById("display");

inputs.onchange = (event) => {
  const displayParagraph = document.getElementById(
    `${event.target.id}-display`
  );
  displayParagraph.innerHTML = event.target.value;
  if (event.target.id === "colour") {
    box.style.backgroundColor = event.target.value;
  } else {
    box.style[event.target.id] = `${event.target.value}px`;
  }
};
