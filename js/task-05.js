const refs = {
  nameLabel: document.querySelector("#name-input"),
  greeting: document.querySelector("#name-output"),
};
refs.nameLabel.addEventListener("input", onInputChange);
function onInputChange(event) {
  let name = event.currentTarget.value;
  refs.greeting.textContent = name.length !== 0 ? name : "незнакомец";
}
