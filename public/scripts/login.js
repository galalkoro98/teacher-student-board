const usernameInput = document.querySelector(
  '.login__form__input[placeholder="Username"]'
);
const passwordInput = document.querySelector(
  '.login__form__input[placeholder="Password"]'
);
const loginButton = document.querySelector(".login__form__button");

loginButton.addEventListener("click", async function (event) {
  event.preventDefault();

  try {
    const response = await fetch("http://localhost:1337/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameInput.value,
        password: passwordInput.value,
      }),
    });
    if (!response.ok) {
      throw new Error(`Unexpected HTTP status: ${response.status}`);
    }
    const data = await response.json();
    if (data.data.status === "success") {
      window.location.href = "../teacher.html";
    } else {
      alert("Wrong username or password");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong, please try again");
  }
});
