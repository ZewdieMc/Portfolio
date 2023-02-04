export const username = document.getElementById('username');
export const email = document.getElementById('email');
export const message = document.getElementById('message');

const populateForm = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  username.value = userData.username;
  email.value = userData.email;
  message.value = userData.message;
};

const saveData = () => {
  const userData = {
    username: username.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('userData', JSON.stringify(userData));
};

window.onload = () => {
  if (localStorage.getItem('userData')) {
    populateForm();
  }
};

username.addEventListener('input', saveData);
email.addEventListener('input', saveData);
message.addEventListener('input', saveData);