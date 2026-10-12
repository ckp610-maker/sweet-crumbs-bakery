
/*
  Sweet Crumbs Bakery
  Fictional portfolio demo for MiniBiz Studio
*/

// Replace this with the real client's WhatsApp number later.
// Use country code + number, without +, spaces or dashes.
const WHATSAPP_NUMBER = "910000000000";

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Product category filters
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedCategory = button.dataset.filter;

    // Highlight the selected category
    filterButtons.forEach(function (item) {
      item.classList.remove("active");
    });

    button.classList.add("active");

    // Show matching products
    productCards.forEach(function (card) {
      const category = card.dataset.category;

      if (selectedCategory === "all" ||
          category === selectedCategory) {
        card.hidden = false;
      } else {
        card.hidden = true;
      }
    });
  });
});

// Send an enquiry to WhatsApp
function sendWhatsAppMessage(message) {
  if (WHATSAPP_NUMBER === "910000000000") {
    alert(
      "This is a portfolio demo! To enable WhatsApp orders, " +
      "replace WHATSAPP_NUMBER in script.js with the real " +
      "business WhatsApp number."
    );
    return;
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL =
    "https://wa.me/" + WHATSAPP_NUMBER +
    "?text=" + encodedMessage;

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
}

// Individual product enquiry buttons
document.querySelectorAll(".order-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    const productName = button.dataset.product;

    const message =
      "Hello Sweet Crumbs Bakery! I'm interested in ordering " +
      productName + ". Could you please share more details?";

    sendWhatsAppMessage(message);
  });
});

// Custom order enquiry
document.getElementById("customOrder").addEventListener(
  "click",
  function () {
    const message =
      "Hello Sweet Crumbs Bakery! I'd like to enquire about " +
      "a custom cake or special order. Could you please help me?";

    sendWhatsAppMessage(message);
  }
);

// Automatically update the copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();
