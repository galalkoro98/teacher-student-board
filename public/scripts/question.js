const form = document.getElementById("form");
const email = document.getElementById("email");
const category = document.getElementById("category");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    data: {
      email: email.value,
      category: category.value,
      message: message.value,
    },
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
        alert("Question sent successfully!");
        window.location.href = "../index.html";
      } else {
        alert("Question not sent!");
      }
    });
});
