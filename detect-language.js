'use strict';

/**
 * Nexum IP-based language detection.
 * - Only runs on root (/) or /en — never on /nl itself.
 * - Honours an explicit user override (nexum-lang-override in localStorage).
 * - Runs at most once per browser session (sessionStorage cache).
 * - Uses a 2-second hard timeout; fails silently on any error.
 * - When NL is detected, calls setLanguage('nl') (defined in i18n.js).
 */
(function () {
  // Don't run on the /nl page (user is already on the right version)
  if (window.location.pathname.startsWith('/nl')) return;

  // Don't override an explicit user preference
  try {
    if (localStorage.getItem('nexum-lang-override')) return;
  } catch (e) {}

  // Don't re-detect in the same browser session
  try {
    if (sessionStorage.getItem('nexum-lang-detected')) return;
  } catch (e) {}

  // Mark as detected immediately to prevent race conditions
  try { sessionStorage.setItem('nexum-lang-detected', '1'); } catch (e) {}

  var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  var timeoutId = setTimeout(function () {
    if (controller) controller.abort();
  }, 2000);

  var fetchOptions = controller ? { signal: controller.signal } : {};

  fetch('https://ipapi.co/json/', fetchOptions)
    .then(function (response) {
      clearTimeout(timeoutId);
      return response.json();
    })
    .then(function (data) {
      if (data && data.country_code === 'NL') {
        // setLanguage is defined in i18n.js which must be loaded first
        if (typeof setLanguage === 'function') {
          setLanguage('nl');
        }
      }
    })
    .catch(function () {
      // Fail silently — do not disrupt the page on API failure
      clearTimeout(timeoutId);
    });
}());
