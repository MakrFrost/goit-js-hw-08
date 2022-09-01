!function(){console.log("Это фидбек клайентса!");
//!
var e,t=document.querySelector(".feedback-form"),o=document.querySelector(".feedback-form textarea"),a="feedback-form-state";t.addEventListener("submit",(function(e){e.preventDefault(),console.log("Вы отправили форму вашему менеджеру!"),e.target.reset(),localStorage.removeItem(a)})),o.addEventListener("input",(function(e){var t=e.target.value;console.log(t),localStorage.setItem(a,t)})),(e=localStorage.getItem(a))&&(console.log(e),o.value=e)}();
//# sourceMappingURL=03-feedback.2922d4bb.js.map
