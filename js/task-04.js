const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueCounter = document.querySelector("#value");

decrementBtn.addEventListener("click", function () {
  counterValue.decrement();
  valueCounter.textContent = counterValue.value;
});

incrementBtn.addEventListener("click", function () {
  counterValue.increment();
  valueCounter.textContent = counterValue.value;
});
