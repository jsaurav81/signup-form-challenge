const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const first = form["first"].value;
  const last = form["last"].value;
  const email = form["email"].value;
  const pass = form["pass"].value;
  if (first === "") {
    addErrorTo("first", "First name cannot be empty");
  } else removeErrorFrom("first");
  if (last === "") {
    addErrorTo("last", "Last name cannot be empty");
  } else removeErrorFrom("last");
  if (email === "" || !validateEmail(email)) {
    addErrorTo("email", "Looks like this is not an email");
  } else removeErrorFrom("email");
  if (pass === "") {
    addErrorTo("pass", "Password cannot be empty");
  } else removeErrorFrom("pass");
});

const addErrorTo = (field, message) => {
  form[field].classList.add("error");
  const small = document.querySelector(`#${field} ~ small`);
  small.innerText = message;
  small.style.opacity = "1";
};

const removeErrorFrom = (field) => {
  form[field].classList.remove("error");
  const small = document.querySelector(`#${field} ~ small`);
  small.innerText = "";
  small.style.opacity = "0";
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
