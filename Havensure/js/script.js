// Basic interactivity placeholder
console.log("Havensure 360 Website Loaded");

document.addEventListener("DOMContentLoaded", () => {
  // Contact Form Submission (Demo)
  const contactForm = document.querySelector("form.card");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for contacting us! (Demo only, backend not connected)");
    });
  }

  // Buyer Login
  const buyerForm = document.getElementById("buyerLogin");
  if (buyerForm) {
    buyerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Login successful as Buyer!");
      window.location.href = "buyer.html";
    });
  }

  // Builder Login
  const builderForm = document.getElementById("builderLogin");
  if (builderForm) {
    builderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Login successful as Builder!");
      window.location.href = "builder.html";
    });
  }

  // Auditor Login
  const auditorForm = document.getElementById("auditorLogin");
  if (auditorForm) {
    auditorForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Login successful as Auditor!");
      window.location.href = "auditor.html";
    });
  }
});
