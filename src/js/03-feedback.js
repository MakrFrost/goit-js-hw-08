function feedback() {
  console.log('Это фидбек клайентса!');
}
feedback();

//!
const form = document.querySelector('.feedback-form');
const textareas = document.querySelector('.feedback-form textarea');

const STG_KEY = 'feedback-form-state';

form.addEventListener('submit', formSubmit);
textareas.addEventListener('input', textAreaInput);
// email.addEventListener('input', emailInput);
// message.addEventListener('input', messageInput);

function formSubmit(event) {
  event.preventDefault();
  console.log('Вы отправили форму вашему менеджеру!');
  event.target.reset();
  localStorage.removeItem(STG_KEY);
}

function textAreaInput(event) {
  const messageValue = event.target.value;
  console.log(messageValue);
  localStorage.setItem(STG_KEY, messageValue);
}

function messageInput(event) {}

function onRefreshPage() {
  const saveMessage = localStorage.getItem(STG_KEY);
  if (saveMessage) {
    console.log(saveMessage);
    textareas.value = saveMessage;
  }
}
onRefreshPage();
