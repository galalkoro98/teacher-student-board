const askQuestionForm = document.querySelector(".ask__question__form");
const askQuestionFormInput = document.querySelector(
  ".ask__question__form__input"
);
const askQuestionFormSelect = document.querySelector(
  ".ask__question__form__catogry__select"
);
const askQuestionFormTextarea = document.querySelector(
  ".ask__question__form__message__textarea"
);

askQuestionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = askQuestionFormInput.value;
  const category = askQuestionFormSelect.value;
  const message = askQuestionFormTextarea.value;

  const data = {
    email,
    category,
    message,
  };

  fetch("http://localhost:1337/api/questions", {
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
        alert("Question added successfully");
      } else {
        alert("Question not added");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
