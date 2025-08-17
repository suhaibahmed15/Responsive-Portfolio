
        emailjs.init("DACZykqoYCm9AwlTm");
        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();
            emailjs.sendForm('service_ghdb2tp', 'template_qobupkb', this)
                .then(() => { document.getElementById('formMessage').textContent = "Message Sent!"; document.getElementById('formMessage').classList.add('show'); },
                    (err) => { document.getElementById('formMessage').textContent = "Error sending message."; document.getElementById('formMessage').classList.add('show'); });
        });
  