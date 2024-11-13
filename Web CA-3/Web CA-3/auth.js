// Signup form validation
document.getElementById("signup-form")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Here, add logic to store username and password (e.g., local storage for testing purposes)
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Signup successful! You can now log in.");
    window.location.href = "login.html";
});

// Login form validation
document.getElementById("login-form")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Fetch stored credentials (in a real application, this would check a database)
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        // Redirect to a protected area (e.g., homepage)
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
