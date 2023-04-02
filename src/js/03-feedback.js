import throttle from "lodash.throttle"

const form = document.querySelector('.feedback-form');
const formData = {};

form.addEventListener('submit', submitForm)
form.addEventListener('input', throttle(userInputData, 500))

anotherSession();

function submitForm(evt) {
  evt.preventDefault();
  const storageData = JSON.parse(localStorage.getItem('feedback-form-state'))
  if (storageData.email && storageData.message) {
    console.log(storageData)
  } else {
    return alert('Всі поля повинні бути заповнені!')
  }
  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
};

function userInputData(evt) {
  formData[evt.target.name] = evt.target.value;
  const storageData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  localStorage.setItem('feedback-form-state', JSON.stringify({...storageData, ...formData}));
};

function anotherSession() {
  const storageData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (storageData) {
    form.querySelector('[name="email"]').value = storageData.email ?? '';
    form.querySelector('[name="message"]').value = storageData.message ?? '';
  }
};