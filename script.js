// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️ Light";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙 Dark";
    localStorage.setItem("theme", "light");
  }
});

// Save user's theme preference
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️ Light";
}

// Project filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const categories = card.getAttribute("data-category");

      if (filter === "all" || categories.includes(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Copy email safely
const copyEmailButton = document.getElementById("copyEmail");
const copyMessage = document.getElementById("copyMessage");

const email = "your-email@example.com";

copyEmailButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyMessage.textContent = "Email copied to clipboard.";
  } catch (error) {
    copyMessage.textContent = "Could not copy email.";
  }

  setTimeout(() => {
    copyMessage.textContent = "";
  }, 3000);
});
