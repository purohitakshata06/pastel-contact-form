// Step 1: Get the form element
const form = document.getElementById("contactForm");

// Step 2: Listen for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop form from submitting

  // Step 3: Get values from input fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Step 4: Check if fields are filled
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields!");
    return;
  }

  // Step 5: Simple email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Step 6: Success message
  alert("Message sent successfully! 🎉");

  // Optional: Reset form
  form.reset();
});

