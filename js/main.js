const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menuToggle.textContent = open ? "×" : "☰";
  });
}

document.querySelectorAll(".year").forEach(el => {
  el.textContent = new Date().getFullYear();
});

const form = document.getElementById("enquiryForm");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    const config = window.NILEVANGUARD_CONFIG || {};
    const status = document.getElementById("formStatus");
    if (!config.email) {
      status.textContent = "The enquiry form is designed, but an official company email has not been configured yet. Add it in js/config.js before launch.";
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent("Website enquiry: " + data.get("service"));
    const body = encodeURIComponent(
      "Name: " + data.get("name") + "\nEmail: " + data.get("email") +
      "\nOrganisation: " + data.get("organisation") +
      "\nService: " + data.get("service") + "\n\nProject details:\n" + data.get("message")
    );
    window.location.href = `mailto:${config.email}?subject=${subject}&body=${body}`;
    status.textContent = "Your email application should open with the enquiry prepared. Please send it from there.";
  });
}
