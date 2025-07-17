let count = 0;
const counter = document.getElementById("counter");

function updateDisplay() {
  counter.textContent = count;
  counter.classList.add("animate");
  setTimeout(() => counter.classList.remove("animate"), 300);
}

function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  count--;
  updateDisplay();
}
const starContainer = document.querySelector(".stars");
for (let i = 0; i < 30; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 3}s`;
  starContainer.appendChild(star);
}
