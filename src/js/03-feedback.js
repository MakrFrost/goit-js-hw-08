const throttle = require('lodash.throttle');

//!
const form = document.querySelector('.feedback-form');
const textareas = document.querySelector('.feedback-form textarea');

const STG_KEY = 'feedback-form-state';
const formStorage = {};

form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(nameInput, 500));
textareas.addEventListener('input', throttle(textAreaInput, 500));

function nameInput(event) {
  formStorage[event.target.name] = event.target.value;

  console.log(formStorage);

  localStorage.setItem('formStorage', JSON.stringify(formStorage));
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
  const saveMessage = localStorage.getItem(STG_KEY);
  if (saveMessage) {
    console.log(saveMessage);
    textareas.value = saveMessage;
    object = JSON.parse(localStorage.getItem(formStorage));
  }
}
onRefreshPage();
