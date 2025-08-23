// ✅ Initialize EmailJS
emailjs.init("DACZykqoYCm9AwlTm"); // Your Public Key

// ✅ Handle Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formMessage = document.getElementById("formMessage");
    formMessage.style.display = "block";
    formMessage.style.color = "#00ffe5";
    formMessage.textContent = "Sending...";

    emailjs.sendForm("service_ghdb2tp", "template_qobupkb", this)
        .then(() => {
            formMessage.style.color = "#00ffe5";
            formMessage.textContent = "✅ Message Sent Successfully!";
            this.reset();

            // Fade out after 3 seconds
            setTimeout(() => {
                formMessage.style.display = "none";
            }, 3000);
        })
        .catch(() => {
            formMessage.style.color = "red";
            formMessage.textContent = "❌ Error sending message. Please try again.";
        });
});
