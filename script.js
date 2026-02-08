// THEME TOGGLE
const toggle = document.getElementById("theme-toggle");

toggle.onclick = () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light")
    ? "🌙 Dark Mode"
    : "☀️ Light Mode";
};

// CONTACT SCROLL
function scrollToContact() {
  document.getElementById("contact")
    .scrollIntoView({ behavior: "smooth" });
}

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
