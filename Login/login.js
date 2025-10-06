const logform=document.getElementById("loginForm")
logform.addEventListener("submit", function(e) { 
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  // Load local users (registered dynamically)
  let localUsers = JSON.parse(localStorage.getItem("users")) || [];

  fetch("../users.json")
    .then(res => res.json())//reads the response and converts it from JSON text into a JavaScript object or array.
    .then(fileUsers => {
      // Merge both sets of users
      let allUsers = [...fileUsers, ...localUsers];

      let foundUser = allUsers.find(u => u.username === username && u.password === password);

      if (foundUser) {
        document.getElementById("loginMessage").innerText = "Login successful! Redirecting...";
        document.getElementById("loginMessage").style.color = "white";

        // Save username for Home Page
        localStorage.setItem("loggedInUser", foundUser.username);

        setTimeout(() => {
        }, 1500);
        window.location.href="./../Home/home.html"
      } else {
        document.getElementById("loginMessage").innerText = "Invalid credentials!";
        document.getElementById("loginMessage").style.color = "red";
      }
    })
    .catch(err => console.error("Error loading users.json", err));
});
