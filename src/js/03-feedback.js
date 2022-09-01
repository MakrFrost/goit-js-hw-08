function feedback() {
  console.log('Это фидбек клайентса!');
}
feedback();

//!
const form = document.querySelector('.feedback-form');
const textareas = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', formSubmit);
textareas.addEventListener('input', textAreaInput);
// email.addEventListener('input', emailInput);
// message.addEventListener('input', messageInput);

function formSubmit(event) {
  event.preventDefault();
  console.log('Вы отправили форму вашему менеджеру!');
  event.target.reset();
}

function textAreaInput(event) {
  const messageValue = event.target.value;
  console.log(messageValue);
  localStorage.setItem('feedback-form-state', messageValue);
}

function messageInput(event) {
  // const text = event.target.value;
  // console.log(text);
  // localStorage.setItem('feedback-form-state', text);
}

function onRefreshPage() {
  const saveMessage = localStorage.getItem('feedback-form-state');
  if (saveMessage) {
    console.log(saveMessage);
  }
}
onRefreshPage();
