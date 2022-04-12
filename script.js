function submitForm() {
  var email = document.getElementById("submitEmail").value;
  if (!email == false) {
    console.log(submitEmail.value);
    exibirText.innerHTML = "";
    exibirImg.innerHTML = "";
    submitEmail.classList.remove("borderError");
    return;
  }
  else if (!email == true) {
    console.log(submitEmail.value);
    exibirImg.innerHTML = '<img class="header_imgError"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fill-rule="evenodd"><circle cx="12" cy="12" r="12" fill="#F96464"/><path fill="#FFF" fill-rule="nonzero" d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z"/></g></svg>';
    exibirText.innerHTML = '<h6 class="header_result"> Please provide a valid email </h6>';
    submitEmail.classList.add("borderError");
  }
  //submitEmail.innerHTML = 'class="header__form-input--email (outra class aleatória)"';
  //submitEmail.innerHTML = 'style="border: red solid 2px"'
  //$("input[type=text]").css("border","1px solid #F00"
  //$('elemento').css('border', '2px solid ##ff0000');
  //$(this).css("border","2px solid #F00");
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
