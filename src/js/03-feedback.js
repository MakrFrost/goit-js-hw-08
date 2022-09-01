const throttle = require('lodash.throttle');

//!
const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const email = document.querySelector('.feedback-form input');

const STG_KEY = 'formStorage';
const formStorage = {};

form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(nameInput, 500));
textarea.addEventListener('input', throttle(textAreaInput, 500));
email.addEventListener('input', throttle(textAreaInput, 500));

function nameInput(event) {
  formStorage[event.target.name] = event.target.value;

  console.log(formStorage);

  localStorage.setItem(STG_KEY, JSON.stringify(formStorage));
}

function formSubmit(event) {
  event.preventDefault();
  console.log('Вы отправили форму вашему менеджеру!');
  event.target.reset();
  localStorage.removeItem(STG_KEY);
}

function textAreaInput(event) {
  const messageValue = event.target.value;
  localStorage.setItem(STG_KEY, messageValue);
}

// function messageInput(event) {}

function onRefreshPage() {
  const localSaveMessage = JSON.parse(localStorage.getItem(STG_KEY));
  if (localSaveMessage) {
    email.value = localSaveMessage.email;
    textarea.value = localSaveMessage.message;
  }
}

onRefreshPage();
