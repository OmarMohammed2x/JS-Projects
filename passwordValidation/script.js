const password = document.getElementById("pass");
const btn = document.querySelector("button");
const list = document.getElementById("list");
const listItem = document.createElement("li");
const listItem2 = document.createElement("li");
btn.addEventListener("click", function () {
  let passVal = password.value;
  let isupper = false;
  let done = false;
  if (passVal.length < 8) {
    list.appendChild(listItem);
    listItem.textContent = "your password is short";
  } else {
    listItem.remove();
    done = true;
  }
  for (const char of passVal) {
    if (char === char.toUpperCase() && isNaN(char) === true) {
      isupper = true;
    }
  }
  if (isupper === false) {
    listItem2.textContent = "Your password must have an uppercase char";
    list.appendChild(listItem2);
  } else {
    listItem2.remove();
    done = true;
  }
  if (done) {
    let ddiv = documetn.createElement("div");
    document.appendChild(ddiv);
    ddiv.textContent = "Done";
  }
  password.focus();
});
