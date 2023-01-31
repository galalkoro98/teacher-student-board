const usernameInput = document.querySelector(
  '.login__form__input[placeholder="Username"]'
);
const passwordInput = document.querySelector(
  '.login__form__input[placeholder="Password"]'
);
const loginButton = document.querySelector(".login__form__button");

loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  //   console.log(`Username: ${username}`);
  //   console.log(`Password: ${password}`);

  if (username === "") {
    alert("Please write your username");
  } else if (password === "") {
    alert("Please write your password");
  } else {
    localStorage.setItem("username", username);

    fetch("http://localhost:1337/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const user = data.find((user) => user.username === username);
        if (user) {
          if (user.password === password) {
            window.location.href = "./teacher.html";
          } else {
            alert("Password is incorrect");
          }
        } else {
          alert("Username is incorrect");
        }
      });
  }
});
