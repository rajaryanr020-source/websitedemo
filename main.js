document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const form = document.getElementById("contactForm");
  if (!form) {
    return;
  }

  const success = document.getElementById("formSuccess");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const booking = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      service: form.service.value,
      date: form.date.value,
      message: form.message.value.trim(),
      submittedAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("serenityBookings") || "[]");
    existing.push(booking);
    localStorage.setItem("serenityBookings", JSON.stringify(existing));

    form.reset();
    form.classList.remove("was-validated");
    success.style.display = "block";
    success.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});
