function submitForm() {
  var email = document.getElementById("submitEmail").value;
  var border = document.getElementById("submitEmail");

  if (email == true || validateEmail(email)) {
    console.log(true);
    border.classList.remove("borderError");
    alertBox.classList.add("invisible");
    alertIcon.classList.add("invisible");
    return;
  }
  console.log(false);
  border.classList.add("borderError");
  alertBox.classList.remove("invisible");
  alertIcon.classList.remove("invisible");
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
