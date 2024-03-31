document.addEventListener('DOMContentLoaded', function() {
  var accountButton = document.querySelector('.account-button');
  var dropdownMenu = document.querySelector('.dropdown-content'); // Предполагается, что у вашего меню есть этот класс

  accountButton.addEventListener('click', function() {
    dropdownMenu.classList.toggle('show');
  });

  window.addEventListener('click', function(event) {
    if (!accountButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove('show');
    }
  });
});