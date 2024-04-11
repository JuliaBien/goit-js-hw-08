import throttle from 'lodash.throttle';
const form = document.querySelector('feedback-form');
const takeDataObject = event => {
  const dataObject = {
    email: event.target.elements.email.value,
    message: event.target.elements.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(dataObject));
};
form.addEventListener('input', throttle(takeDataObject, 500));
if (localStorage.getItem('feedback-form-state')) {
  form.elements.email.value = dataObject.email;
  form.elements.message.value = dataObject.message;
}
const button = document.querySelector('submit');
const clearDataStorage = event => {
  event.preventDefault();
  form.elements.email.value = '';
  form.elements.message.value = '';
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.clear();
};
button.addEventListener('click', clearDataStorage);
