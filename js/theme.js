document.querySelectorAll('.theme-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var isLight = document.documentElement.getAttribute('data-theme') === 'light';
    var next = isLight ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
});
