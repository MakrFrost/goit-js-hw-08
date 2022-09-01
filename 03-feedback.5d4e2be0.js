!function(){console.log("Это фидбек клайентса!");
//!
var e=document.querySelector(".feedback-form"),t=document.querySelector(".feedback-form textarea");e.addEventListener("submit",(function(e){e.preventDefault(),console.log("Вы отправили форму вашему менеджеру!"),e.target.reset()})),t.addEventListener("input",(function(e){var t=e.target.value;console.log(t),localStorage.setItem("feedback-form-state",t)}))}();
//# sourceMappingURL=03-feedback.5d4e2be0.js.map
