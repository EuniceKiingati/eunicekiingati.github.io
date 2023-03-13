"use strict";

// //Validation forms
// function validateForm(selector) {
//     Array.from(document.querySelectorAll(selector)).forEach(item => {
//         item.addEventListener('input', (e) => {
//             if(e.target.value === ''){
//             item.dataset.touched = false;
//             }
//         });
//         item.addEventListener('invalid', () => {
//             item.dataset.touched = true;
//         });
//         item.addEventListener('blur', () => {
//             if (item.value !== '') item.dataset.touched = true;
//         });
//     });
// };

// validateForm('.js-form .form-field');

// var form = document.querySelector('.js-form');
// var formName = '.js-form';

// form.addEventListener('submit', function(e){
//     submitForm(e, formName);
// });

// function submitForm(e, formName) {
//     e.preventDefault();
//     var name = $(formName + ' .js-field-name').val();
//     var email = $(formName + ' .js-field-email').val();
//     var message = $(formName + ' .js-field-message').val();

//     var formData = {
//         name: name,
//         email: email,
//         message: message
//     };

//     $.ajax({
//         type: "POST",
//         url: 'mail.php',
//         data: formData,
//         success: function () {
//             console.log('success');
//             //...
//         },
//         error: function () {
//             console.log('error');
//             //...
//         }
//     });

// }

const sendEmail = (e) => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  // const subject=document.getElementById('number').value;
  const message = document.getElementById("message").value;

  if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
    console.log("test");
    return;
  }

  var templateParams = {
    from_name: name,
    message: message,
    to_name: "Eunice",
    email: email,
  };
    emailjs.send("service_34dspzg", "template_dqa127v", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("emailForm").reset();
        alert("Sent");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
};

var form = document.querySelector(".js-form");
// var formName = '.js-form';

form.addEventListener("submit", function (e) {
  e.preventDefault();
  sendEmail(e);
});
