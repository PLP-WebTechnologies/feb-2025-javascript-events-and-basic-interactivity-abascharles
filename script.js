// Handle button click
const clickBtn = document.getElementById("clickBtn");
const secretDiv = document.getElementById("secret");

clickBtn.addEventListener("click", () => {
  alert("Button clicked!");
});

// Handle double-click to reveal hidden secret
clickBtn.addEventListener("dblclick", () => {
  secretDiv.classList.toggle("hidden");
});

// Detect keypress in input field
document
  .getElementById("keypressInput")
  .addEventListener("keypress", (event) => {
    console.log(`Key pressed: ${event.key}`);
  });

// Toggle background color on button click
function toggleColor(button) {
  const current = button.style.backgroundColor;
  button.style.backgroundColor = current === "yellow" ? "" : "yellow";
}

// Tab toggle function
function toggleTab(button) {
  // Remove 'active' from all buttons
  const buttons = document.querySelectorAll(".tabs button");
  buttons.forEach((btn) => btn.classList.remove("active"));

  // Hide all tab contents
  const contents = document.querySelectorAll(".tabs div");
  contents.forEach((content) => (content.style.display = "none"));

  // Add 'active' to clicked button and show the next sibling div
  button.classList.add("active");
  const content = button.nextElementSibling;
  if (content) {
    content.style.display = "block";
  }
}

// Email validation
const emailInput = document.getElementById("email");
const emailFeedback = document.getElementById("emailFeedback");

emailInput.addEventListener("input", () => {
  if (!emailInput.value.includes("@")) {
    emailFeedback.textContent = "Please enter a valid email.";
  } else {
    emailFeedback.textContent = "";
  }
});

// Password validation
const passwordInput = document.getElementById("password");
const passwordFeedback = document.getElementById("passwordFeedback");

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 8) {
    passwordFeedback.textContent = "Password must be at least 8 characters.";
  } else {
    passwordFeedback.textContent = "";
  }
});

// Form submission
document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Form submitted successfully!");
});
