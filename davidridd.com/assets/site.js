/* davidridd.com: the only script on the site. It runs the phone menu and the testimonial carousel. */
(function () {
  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');

  /* ---- Phone menu ---- */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (header && toggle && links) {
    var setOpen = function (open) {
      header.setAttribute('data-open', open ? 'true' : 'false');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () {
      setOpen(header.getAttribute('data-open') !== 'true');
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.getAttribute('data-open') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ---- Testimonial carousel ---- */
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll('.quote'));
    var track = root.querySelector('.slides');
    var nav = root.querySelector('.carousel-nav');
    var dots = root.querySelector('.dots');
    var prev = root.querySelector('[data-prev]');
    var next = root.querySelector('[data-next]');
    if (!slides.length || !nav || !dots) return;
    nav.setAttribute('data-count', String(slides.length));
    var index = 0, timer = null, userTouched = false;

    slides.forEach(function (s, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', 'Testimonial ' + (i + 1) + ' of ' + slides.length);
      b.addEventListener('click', function () { userTouched = true; show(i); });
      dots.appendChild(b);
    });
    var dotButtons = Array.prototype.slice.call(dots.children);

    function show(i) {
      index = (i + slides.length) % slides.length;
      var height = slides[index].offsetHeight; /* read before any write, so the browser lays out once */
      slides.forEach(function (s, j) {
        s.classList.toggle('is-active', j === index);
        s.setAttribute('aria-hidden', j === index ? 'false' : 'true');
      });
      dotButtons.forEach(function (d, j) { d.setAttribute('aria-selected', j === index ? 'true' : 'false'); });
      if (track) track.style.height = height + 'px';
      if (userTouched) stop();
    }
    /* Size the track to the quote on screen, so short quotes don't sit in the space of the longest one. */
    function fit() {
      if (track) track.style.height = slides[index].offsetHeight + 'px';
    }
    window.addEventListener('resize', fit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    function start() {
      if (reduceMotion || slides.length < 2 || userTouched) return;
      stop();
      timer = window.setInterval(function () { show(index + 1); }, 9000);
    }
    function stop() { if (timer) { window.clearInterval(timer); timer = null; } }

    if (prev) prev.addEventListener('click', function () { userTouched = true; show(index - 1); });
    if (next) next.addEventListener('click', function () { userTouched = true; show(index + 1); });
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', start);
    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { userTouched = true; show(index - 1); }
      if (e.key === 'ArrowRight') { userTouched = true; show(index + 1); }
    });

    show(0);
    start();
  });
})();
