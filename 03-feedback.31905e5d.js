console.log("Это фидбек клайентса!");
//!
const e=document.querySelector(".feedback-form"),t=document.querySelector(".feedback-form textarea");e.addEventListener("submit",(function(e){e.preventDefault(),console.log("Вы отправили форму вашему менеджеру!"),e.target.reset(),localStorage.removeItem("feedback-form-state")})),t.addEventListener("input",(function(e){const t=e.target.value;console.log(t),localStorage.setItem("feedback-form-state",t)})),function(){const e=localStorage.getItem("feedback-form-state");e&&(console.log(e),t.value=e)}();
//# sourceMappingURL=03-feedback.31905e5d.js.map
