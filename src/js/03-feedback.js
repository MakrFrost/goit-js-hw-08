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
  const saveMessage = localStorage.getItem(
    STG_KEY,
    formStorage.email,
    formStorage.message
  );
  if (saveMessage) {
    email.value = formStorage.email;
    textarea.value = formStorage.message;
    object = JSON.parse(
      localStorage.getItem(formStorage.email, formStorage.message)
    );
  }
}
onRefreshPage();
