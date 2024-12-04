//your JS code here. If required.
let form = document.getElementById('login-form');
    let usernameField = document.getElementById('username');
    let passwordField = document.getElementById('password');
    let rememberMeCheckbox = document.getElementById('checkbox');
    let existingButton = document.getElementById('existing');

    window.onload = function() {
      let savedUsername = localStorage.getItem('username');
      let savedPassword = localStorage.getItem('password');
      if (savedUsername && savedPassword) {
        existingButton.style.display = 'block';
      }
    };

    // Handle form submission
    form.onsubmit = function(event) {
      event.preventDefault();
      let username = usernameField.value.trim();
      let password = passwordField.value.trim();

      if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return;
      }

      if (rememberMeCheckbox.checked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }

      alert(`Logged in as ${username}`);
      existingButton.style.display = 'block';
    };

    // Handle existing user login
    existingButton.onclick = function() {
      let savedUsername = localStorage.getItem('username');
      alert(`Logged in as ${savedUsername}`);
    };