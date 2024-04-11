import throttle from 'lodash.throttle';
const form = document.querySelector('form.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
if (localStorage.getItem('feedback-form-state')) {
  const saveDatas = JSON.parse(localStorage.getItem('feedback-form-state'));
  email.value = saveDatas.email;
  message.value = saveDatas.message;
}
const takeDataObject = () => {
  const dataObject = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(dataObject));
};
form.addEventListener('input', throttle(takeDataObject, 500));
if (localStorage.getItem('feedback-form-state')) {
  const saveDatas = JSON.parse(localStorage.getItem('feedback-form-state'));
  email.value = saveDatas.email;
  message.value = saveDatas.message;
}
const clearDataStorage = event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  form.reset();
  localStorage.removeItem('feedback-form-state');
};
form.addEventListener('submit', clearDataStorage);
