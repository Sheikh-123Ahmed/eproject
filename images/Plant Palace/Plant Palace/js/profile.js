// Check if the user is logged in
// Check if the user is logged in
if (localStorage.getItem("uname")) {
  var username = localStorage.getItem("uname");
  document.getElementById("loginLink").innerText = "Logout";

  // Create and insert the profile anchor tag
  var profileLink = document.createElement("a");
  profileLink.href = ""; // Set the URL for the profile page
  profileLink.textContent = username;
  profileLink.style.backgroundColor = "#072A19";
  profileLink.style.color = "white";
  profileLink.className = "btn py-4 px-lg-4 rounded-0 d-none d-lg-block";
  profileLink.appendChild(document.createElement("i")).className = "fa fa-arrow-right ms-3";

  var nav = document.querySelector("nav");
  nav.appendChild(profileLink);
}

// Add event listener to the login/logout button
document.getElementById("loginLink").addEventListener("click", function() {
  if (localStorage.getItem("uname")) {
      // User is logged in, so log them out
      localStorage.removeItem("uname");
      document.getElementById("loginLink").innerText = "Login";
      document.getElementsByClassName("profile-Link").innerText = "usename";

      // Remove the profile link
      var profileLink = document.querySelector(".profile-link");
      if (profileLink) {
          profileLink.remove();
      }
  } else {
     

          // Create and insert the profile anchor tag
          var profileLink = document.createElement("a");
          profileLink.href = "profile.html"; // Set the URL for the profile page
          profileLink.textContent = username;
          profileLink.style.backgroundColor = "#072A19";
          profileLink.style.color = "white";
          profileLink.className = "btn py-4 px-lg-4 rounded-0 d-none d-lg-block profile-link";
          profileLink.appendChild(document.createElement("i")).className = "fa fa-arrow-right ms-3";

          var nav = document.querySelector("nav");
          nav.appendChild(profileLink);
      }
  }
);
  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);
