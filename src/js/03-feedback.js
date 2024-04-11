import throttle from 'lodash.throttle';
const form = document.querySelector('feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const takeDataObject = () => {
  const dataObject = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(dataObject));
};
form.addEventListener('input', throttle(takeDataObject, 500));
if (localStorage.getItem('feedback-form-state')) {
  const emailData = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
  const messageData = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
  email.value = emailData;
  message.value = messageData;
}
const button = document.querySelector('submit');
const clearDataStorage = event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  form.reset();
  localStorage.clear();
};
button.addEventListener('click', clearDataStorage);
