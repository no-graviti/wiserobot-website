document.querySelectorAll('.theme-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme');
    var isDark = current === 'dark' || (!current && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
});
