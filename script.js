// script.js

    // Fetch and include the navbar content
    document.addEventListener("DOMContentLoaded", function () {
      fetch('navbar.html')
        .then(response => response.text())
        .then(data => document.getElementById('navbar-placeholder').innerHTML = data);
        //alert("fetching navbar contents")
    });
  
// script.js

    
// getting username and password for Login

    document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // You can add your login logic here
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Example: Just alerting the entered username and password
    alert("Username: " + username + "\nPassword: " + password);
  });

  // initilising map for warehouses locations



  //  getting username and password for signup
  document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // You can add your signup logic here
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    // Example: Just alerting the entered values
    alert("Full Name: " + fullname + "\nEmail: " + email + "\nPassword: " + password + "\nConfirm Password: " + confirm_password);
  });

  //  getting username and password for signup

  function generateFooter() {
    var footer = document.getElementById('footer');
  
    // Clear previous content
    footer.innerHTML = '';
  
    // Create footer items
    var footerItem1 = document.createElement('p');
    footerItem1.textContent = 'Copyright © 2024 - Cella warehousing';
  
    var footerItem2 = document.createElement('div');
    footerItem2.className = 'social-icons';
  
    // Create social icons
    var icons = ['facebook', 'twitter', 'linkedin', 'instagram'];
    icons.forEach(function(iconName) {
      var link = document.createElement('a');
      link.href = '#';
      var icon = document.createElement('img');
      icon.src = iconName + '.png'; // Assuming you have image files named facebook.png, twitter.png, linkedin.png, and instagram.png
      icon.alt = iconName.charAt(0).toUpperCase() + iconName.slice(1);
      link.appendChild(icon);
      footerItem2.appendChild(link);
    });
  
    // Append footer items to the footer
    footer.appendChild(footerItem1);
    footer.appendChild(footerItem2);
  }
  