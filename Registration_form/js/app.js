document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Registration successful!');
});

document.getElementById('registrationForm').addEventListener('reset', function() {
  alert('Form reset!');
});
