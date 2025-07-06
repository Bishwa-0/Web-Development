let count = 0;

const button = document.querySelector('.cool-button');
const countDisplay = document.querySelector('.click-count');
const toast = document.getElementById('toast');
const toggleBtn = document.querySelector('.toggle-theme');
const body = document.body;

// Click counter logic
button.addEventListener('click', () => {
  count++;
  countDisplay.textContent = `You’ve clicked ${count} times.`;

  toast.textContent = `Clicked! (${count})`;
  toast.style.opacity = 1;
  setTimeout(() => {
    toast.style.opacity = 0;
  }, 1500);
});

// Theme toggle logic — switch between .deepblue and .sunrise
toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('deepblue')) {
    body.classList.remove('deepblue');
    body.classList.add('sunrise');
  } else {
    body.classList.remove('sunrise');
    body.classList.add('deepblue');
  }
});
