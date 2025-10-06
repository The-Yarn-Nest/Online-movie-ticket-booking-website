const regform=document.getElementById("registerForm")
regform.addEventListener("submit",(event)=>{ 
  event.preventDefault();

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (!username || !email || !password) {
    document.getElementById("message").innerText = "All fields are required!";
    document.getElementById("message").style.color = "red";
    return;
  }

  // Load users from localStorage (simulate DB)
  let localUsers = JSON.parse(localStorage.getItem("users")) || [];//converts JSON string to javascript array of object

  // Check if username already exists
  let exists = localUsers.find(u => u.username === username);

  if (exists) {
    document.getElementById("message").innerText = "Username already exists! Redirecting to login...";
    document.getElementById("message").style.color = "orange";
    // Redirect existing user to login page
    setTimeout(() => {
      window.location.href = "../Login/login.html";
    }, 1500);
  } else {
    document.getElementById("message").innerText = "Registered successfully!";
    document.getElementById("message").style.color = "white";

    // Save in localStorage
    let newUser = { username, email, password };
    localUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(localUsers));

    // Redirect to login after successful registration
    setTimeout(() => {
      window.location.href = "../Login/login.html";
    }, 1500);
  }
});