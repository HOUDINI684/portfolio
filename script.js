// Année du pied de page
document.getElementById('year').textContent = new Date().getFullYear();

// Apparition douce au défilement
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();

// Menu : met en évidence la section visible
(function () {
  if (!('IntersectionObserver' in window)) return;
  var links = document.querySelectorAll('.side-nav a');
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('data-sec')] = a; });
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        links.forEach(function (a) { a.removeAttribute('aria-current'); });
        var a = map[e.target.id];
        if (a) a.setAttribute('aria-current', 'true');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  Object.keys(map).forEach(function (id) {
    var s = document.getElementById(id);
    if (s) spy.observe(s);
  });
})();
