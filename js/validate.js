const form = document.querySelector('form');
const email = document.getElementById('email');
const emailErrorContainer = document.querySelector('span.error');

email.addEventListener('input', () => {
  if (emailErrorContainer.classList.contains('active')) {
    emailErrorContainer.classList.remove('active');
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    emailErrorContainer.textContent = 'You are required to use only lowercase letters in your email.';
    emailErrorContainer.classList.add('active');
    setTimeout( ()=> emailErrorContainer.classList.remove('active'), 5000);
  } else {
    form.submit();
  }
});