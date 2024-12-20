document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.add('translate-x-0');
});

document.getElementById('mobile-menu-close').addEventListener('click', function() {
  document.getElementById('mobile-menu').classList.remove('translate-x-0');
});