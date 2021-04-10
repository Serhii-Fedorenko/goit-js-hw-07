const refs = {
  nameLabel: document.querySelector("#name-input"),
  greetings: document.querySelector("#name-output"),
};

refs.nameLabel.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (refs.nameLabel.textContent !== " ") {
      refs.greetings.textContent = event.currentTarget.value;
} else {
    refs.greetings.textContent = "незнакомец";
  }
}
