console.log("Это фидбек клайентса!");
//!
const e=document.querySelector(".feedback-form"),t=document.querySelector(".feedback-form textarea");e.addEventListener("submit",(function(e){e.preventDefault(),console.log("Вы отправили форму вашему менеджеру!"),e.target.reset()})),t.addEventListener("input",(function(e){const t=e.target.value;console.log(t),localStorage.setItem("feedback-form-state",t)}));
//# sourceMappingURL=03-feedback.ea8f51d6.js.map
