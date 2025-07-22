let count = 0;
let previousEmoji = null;
let isLight = false;

const counter = document.getElementById("counter");
const homePage = document.getElementById("home-page");
const counterPage = document.getElementById("counter-page");
const emojiFeedback = document.getElementById("emoji-feedback");
const motivationalMessage = document.getElementById("motivational-message");

// Update counter display
function updateDisplay() {
  counter.textContent = count;
  counter.classList.add("animate");
  setTimeout(() => counter.classList.remove("animate"), 300);
  updateEmojiAndMessage();
  updateProgressBar(); // Optional: If using a progress bar
}

// Count controls
function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  count--;
  updateDisplay();
}

// Page navigation
function goToCounter() {
  homePage.classList.add("hidden");
  counterPage.classList.remove("hidden");
}

function goHome() {
  counterPage.classList.add("hidden");
  homePage.classList.remove("hidden");
}

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light");
  isLight = !isLight;
}

// Dynamic Emoji and Message Logic
function updateEmojiAndMessage() {
  let emoji = "🤔";
  let message = "Let's get started!";

  if (count < 0) {
    emoji = "😢";
    message = "Feeling low? You got this!";
  } else if (count === 0) {
    emoji = "😐";
    message = "Neutral start. Ready to go?";
  } else if (count > 0 && count < 20) {
    emoji = "😊";
    message = "Nice start! Keep going!";
  } else if (count >= 20 && count < 50) {
    emoji = "😁";
    message = "You're doing awesome!";
  } else if (count >= 50) {
    emoji = "🚀";
    message = "Woah! You're on fire!";
  }

  if (emoji !== previousEmoji) {
    emojiFeedback.textContent = emoji;
    emojiFeedback.classList.remove("animate-emoji");
    void emojiFeedback.offsetWidth; // Trigger reflow
    emojiFeedback.classList.add("animate-emoji");
    previousEmoji = emoji;
  }

  motivationalMessage.textContent = message;
}

// Star background animation
const starContainer = document.querySelector(".stars");
for (let i = 0; i < 30; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 3}s`;
  starContainer.appendChild(star);
}

// OPTIONAL: Progress bar update (if used in HTML)
function updateProgressBar() {
  const progressBar = document.querySelector(".progress-bar");
  if (progressBar) {
    const max = 100;
    let percent = Math.min((count / max) * 100, 100);
    progressBar.style.width = percent + "%";
  }
}
