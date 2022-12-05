const sendEmail = ()=>{
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const subject=document.getElementById('number').value;
    const message=document.getElementById('message').value;

    if(name.trim() == '' || email.trim() =='' || subject.trim()=='' || message.trim()==''){
        console.log("test")
        return
    }

    var templateParams = {
        from_name: name,
        subject:subject,
        message: message,
        to_name: 'Eunice',
        email: email,
    };
    emailjs.send('service_dmq8z78', 'template_ecdgia9', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       document.getElementById("emailForm").reset();
       alert("Sent")

    }, function(error) {
       console.log('FAILED...', error);
    });
}