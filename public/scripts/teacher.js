const studentName = document.querySelector("#student-name");
const studentEmail = document.querySelector("#student-email");
const studentSubject = document.querySelector("#student-subject");
const studentMessage = document.querySelector("#student-message");
const replyButton = document.querySelector("#reply-button");
const replyForm = document.querySelector("#reply-form");
const replyEmail = document.querySelector("#reply-email");
const replySubject = document.querySelector("#reply-subject");
const replyMessage = document.querySelector("#reply-message");
const replyFormForm = document.querySelector(".reply-form__form");

replyButton.addEventListener("click", (e) => {
  replyForm.style.display = "block";
  replyEmail.value = studentEmail.textContent;
});

replyFormForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    to: replyEmail.value,
    subject: replySubject.value,
    message: replyMessage.value,
  };

  fetch("http://localhost:1337/api/answers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      if (data.status === "success") {
        alert("Reply sent successfully");
      } else {
        alert("Reply not sent");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
