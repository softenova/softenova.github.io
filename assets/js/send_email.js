// Initialize EmailJS with your Public Key
emailjs.init('x-AVWjPTe60cGoVsj');

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  const templateParams = {
    from_name:  name,
    from_email: email,
    subject:    subject || 'No Subject',
    message:    message,
  };

  // Send notification email to YOU (softenova@gmail.com)
  emailjs.send('service_vsxia5g', 'template_mpd8d8e', templateParams)
    .then(function() {
      // Send auto-reply email to the VISITOR
      return emailjs.send('service_vsxia5g', 'template_zj4oeij', templateParams);
    })
    .then(function() {
      document.getElementById('successMessage').classList.remove('d-none');
      document.getElementById('errorMessage').classList.add('d-none');
      document.getElementById('contactForm').reset();
    })
    .catch(function(error) {
      console.error('EmailJS error:', error);
      document.getElementById('errorMessage').classList.remove('d-none');
      document.getElementById('successMessage').classList.add('d-none');
    });
});