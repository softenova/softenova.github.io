// document.getElementById('contactForm').addEventListener('submit', function(e) {
//   e.preventDefault();

//   const name    = document.getElementById('name').value.trim();
//   const email   = document.getElementById('email').value.trim();
//   const subject = document.getElementById('subject').value.trim();
//   const message = document.getElementById('message').value.trim();

//   // Format the WhatsApp message
//   const text = 
//     `👤 *Name:* ${name}\n` +
//     `📧 *Email:* ${email}\n` +
//     `📌 *Subject:* ${subject || 'N/A'}\n` +
//     `💬 *Message:* ${message}`;

//   // ⬇️ Replace with your WhatsApp number (country code + number, no + or spaces)
//   const phoneNumber = '8801881445919';

//   const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

//   // Open WhatsApp in a new tab
//   window.open(whatsappURL, '_blank');

//   // Show success message
//   document.getElementById('successMessage').classList.remove('d-none');
//   document.getElementById('errorMessage').classList.add('d-none');
//   this.reset();
// });