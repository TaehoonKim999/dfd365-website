// The page URL decides the language; this only remembers it for the next homepage visit.
(function () {
  var lang = document.documentElement.getAttribute('lang');
  var allowed = { ko: true, en: true, ja: true };
  if (!allowed[lang]) return;
  try {
    localStorage.setItem('language', lang);
  } catch (err) {
    // Storage can be unavailable (private mode, disabled); the page works without it.
  }
})();
