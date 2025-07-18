    // Automatically show login form after 13 seconds
    setTimeout(showLogin, 13000);

    // When the video ends or skip is pressed
    function showLogin() {
      document.getElementById("intro-video").classList.add("hidden");
      document.getElementById("login-form").classList.add("show");
      const skipBtn = document.getElementById("skip-btn");
      if (skipBtn) skipBtn.style.display = "none";
    }

    // Optional: also trigger showLogin if video ends early
    document.addEventListener("DOMContentLoaded", function () {
      const video = document.getElementById("intro-video");
      const skip = document.getElementById("skip-btn");

      if (video) {
        video.addEventListener("ended", showLogin);
      }

      if (skip) {
        skip.addEventListener("click", showLogin);
      }
    });

    // Simple login check
    function login() {
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;
      const message = document.getElementById("login-message");

      if (user === "admin" && pass === "admin123") {
        window.location.href = "index.html";
      } else {
        message.textContent = "Invalid credentials!";
      }
    }

