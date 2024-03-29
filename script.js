setTimeout(() => {
  document.getElementById("splash").classList.toggle("fade-up");
  document.body.style.overflow = "auto";
}, 2000);

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxElMTSstd5pt-DatSGojc2YCgu6t_Fn2mgFDQV8FgOeKhLP0CE0jyYE8SfpZVc7dXa/exec";

const form = document.forms["submit-to-google-sheet"];

const responseMsg = document.getElementById("response");

const submitBtn = document.getElementById("submitButton");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  submitBtn.disabled = true;

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      responseMsg.innerHTML = "Thanks for reaching out!";

      submitBtn.disabled = false;

      setTimeout(() => {
        responseMsg.innerHTML = "";
      }, 6000);

      form.reset();
    })
    .catch((error) => {
      responseMsg.innerHTML = "Something went wrong!";

      responseMsg.style.color = "#cf0606";

      submitBtn.disabled = false;

      setTimeout(() => {
        responseMsg.innerHTML = "";
      }, 6000);

      console.error("Error!", error.message);

      form.reset();
    });
});
