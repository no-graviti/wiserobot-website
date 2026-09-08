document.querySelectorAll('nav.main-nav a').forEach(function (link) {
  link.addEventListener('click', function () {
    var toggle = document.getElementById('nav-toggle');
    if (toggle) toggle.checked = false;
  });
});
