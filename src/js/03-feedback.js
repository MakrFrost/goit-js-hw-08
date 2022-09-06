const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const email = document.querySelector('.feedback-form input');

const STG_KEY = 'formStorage';
let formStorage = {};

onRefreshPage();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onNameInput, 500));
textarea.addEventListener('input', throttle(onTextAreaInput, 500));
email.addEventListener('input', throttle(onTextAreaInput, 500));

function onNameInput(event) {
  formStorage[event.target.name] = event.target.value;

  console.log(formStorage);

  localStorage.setItem(STG_KEY, JSON.stringify(formStorage));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formStorage);
  formStorage = {};
  event.target.reset();
  localStorage.removeItem(STG_KEY);
}

function onTextAreaInput(event) {
  const messageValue = event.target.value;
  localStorage.setItem(STG_KEY, messageValue);
}

function onRefreshPage() {
  const saveMessage = JSON.parse(localStorage.getItem(STG_KEY));

  if (saveMessage?.email) {
    email.value = saveMessage.email;
  }
  if (saveMessage?.message) {
    textarea.value = saveMessage.message;
  }

  if (saveMessage) {
    formStorage = saveMessage;
  }
}
