// When a page opens at #anchor, the web font arrives after the first layout and the text above the
// anchor gets shorter, so the browser's own jump lands a few hundred pixels off. Jump again once the
// fonts are in, then leave the reader alone.
(function () {
  var settled = false;
  function settle() { settled = true; }
  ['wheel', 'touchstart', 'keydown'].forEach(function (e) {
    addEventListener(e, settle, { passive: true, once: true });
  });
  function land() {
    if (settled || !location.hash) return;
    var el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!el) return;
    var root = document.documentElement, prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    el.scrollIntoView(true);
    root.style.scrollBehavior = prev;
  }
  addEventListener('load', land);
  if (document.fonts) {
    document.fonts.ready.then(land);
    document.fonts.addEventListener('loadingdone', land);
  }
  setTimeout(land, 1500);
  setTimeout(settle, 5000);
})();
