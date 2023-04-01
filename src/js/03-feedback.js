import throttle from "lodash.throttle"

const form = document.querySelector('.feedback-form');
const formData = {};

form.addEventListener('submit', submitForm)
form.addEventListener('input', throttle(userInputData, 500))


function submitForm(evt) {
  evt.preventDefault();
  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
}

function userInputData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}