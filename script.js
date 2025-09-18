document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const formMessage = document.getElementById('form-message');

  if (!name.value || !email.value || !message.value) {
    formMessage.textContent = 'Please fill in all required fields.';
    formMessage.style.color = 'red';
  } else {
    formMessage.textContent = 'Message sent successfully!';
    formMessage.style.color = 'green';
    this.reset();
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
