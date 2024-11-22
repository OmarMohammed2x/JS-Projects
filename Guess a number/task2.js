function creatGame(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const form = document.forms[0];
form.addEventListener("submit", (e) => {
  // prevent default
  e.preventDefault();
  // get range of numbers form user
  const min = parseInt(document.querySelector("#min").value);

  const max = parseInt(document.querySelector("#max").value);

  // get a number from user
  const number = parseInt(document.querySelector("#number").value);
  // generate a number

  const secretNumber = creatGame(min, max);
  // result div
  const result = document.querySelector("#result");

  if (number == secretNumber) {
    result.textContent = "You won";
  } else if (number > secretNumber) {
    result.textContent = "You entered a high number";
  } else {
    result.textContent = "You entered a low number";
  }
  document.getElementById("entered").textContent = number;
  document.getElementById("answer").textContent = secretNumber;
});
