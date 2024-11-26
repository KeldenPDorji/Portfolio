// EmailJS Configuration
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

// Function to handle email sending on form submit
const sendEmail = (e) => {
    e.preventDefault();  // Prevents the default form submission behavior (page reload)

    // Use emailjs.sendForm to send the form data to EmailJS service
    emailjs.sendForm(
        "service_kpprplp",  // Replace with your Service ID
        "template_9sstfwp",  // Replace with your Template ID
        "#contact-form",     // The form selector
        "sVx2KkhqfPP4HNpX_"  // Replace with your User Public Key
    )
    .then(() => {
        // Success message
        contactMessage.textContent = 'Your message has been sent successfully 🚀';
        contactMessage.style.color = 'green';

        // Clear the message after 4 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
            contactForm.reset();
        }, 4000);
    }, (error) => {
        // Error message
        console.error('Failed to send message:', error);
        contactMessage.textContent = 'Message not sent, try again later 😢';
        contactMessage.style.color = 'red';
    });
};

// Attach event listener to form submission
contactForm.addEventListener('submit', sendEmail);
