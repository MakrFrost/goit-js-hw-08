function feedback() {
  console.log('Это фидбек клайентса!');
}
feedback();

const form = document.querySelector('feedback-form');
const email = document.getElementsByName('email')[0];
const message = document.getElementsByName('message')[0];

console.log(form);
console.log(email);
console.log(message);
