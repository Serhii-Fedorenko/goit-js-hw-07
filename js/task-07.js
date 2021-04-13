const targetRange = document.querySelector("#font-size-control");
const textValue = document.querySelector("#text");

targetRange.addEventListener("input", onInputChange);

function onInputChange(event) {
  textValue.style.fontSize = event.currentTarget.value + "px";
}
