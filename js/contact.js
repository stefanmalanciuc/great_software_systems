function validateForm() {
  var name_input = document.getElementById("user_name");
  var email_input = document.getElementById("user_email");
  var form_message_input = document.getElementById("form_message");

  var validFields = true;

  if (!name_input.value) {
    name_input.classList.add('error');
    validFields = false;
  } else {
    name_input.classList.remove('error');
  }

  if (!email_input.value) {
    email_input.classList.add('error');
    validFields = false;
  } else {
    email_input.classList.remove('error');
  }

  if (!form_message_input.value) {
    form_message_input.classList.add('error');
    validFields = false;
  } else {
    form_message_input.classList.remove('error');
  }

  return validFields;
}

var form = document.getElementById("contact_form");

form.addEventListener('submit', event => {
  event.preventDefault();

  var validForm = validateForm();

  if (validForm) {
    var elem = document.querySelectorAll('.modal');
    openModal();
  }
});

function openModal() {
  const elem = document.getElementById('modal1');
  const instance = M.Modal.init(elem, {dismissible: false});
  instance.open();
}

function submitForm() {
  console.log("form submitted")
  form.submit();
}
