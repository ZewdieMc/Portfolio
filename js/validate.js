const form = document.querySelector('form');
const email = document.getElementById('email');
const emailErrorContainer = document.querySelector('span.error');

// remove the active class from the error span when the user types
email.addEventListener('input', () => {
  if (emailErrorContainer.classList.contains('active')) {
    emailErrorContainer.classList.remove('active');
  }
});

form.onsubmit = (event) => {
  event.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    emailErrorContainer.textContent = 'You are required to use only lowercase letters in your email.';
    emailErrorContainer.classList.add('active');
  } else {
    emailErrorContainer.classList.remove('active');
    form.submit();
  }
};