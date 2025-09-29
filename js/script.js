let currentService = "";

// Open Lightbox
function openLightbox(img, title, desc) {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  document.getElementById("lightbox-img").src = `images/${img}`;
  document.getElementById("lightbox-title").innerText = title;
  document.getElementById("lightbox-desc").innerText = desc;

  lightbox.style.display = "flex"; // better for centering
  currentService = title;
}

// Close Lightbox
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) lightbox.style.display = "none";
}

// Visit site button inside Lightbox
function visitSite() {
  const serviceLinks = {
    "Handover 360": "https://yourhandover360website.com", // replace with real
    "CiviTech Audit": "https://yourcivitechauditwebsite.com" // replace with real
  };

  if (currentService && serviceLinks[currentService]) {
    window.open(serviceLinks[currentService], "_blank");
  }
}

// Animate cards on scroll + page load
function revealCards() {
  const cards = document.querySelectorAll(".fade-up");
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
}

// Run on scroll
document.addEventListener("scroll", revealCards);

// Run on page load
window.addEventListener("load", revealCards);
