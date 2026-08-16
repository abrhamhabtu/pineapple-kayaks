(function () {
  var openBtn = document.querySelector("[data-open-nav]");
  var closeBtn = document.querySelector("[data-close-nav]");
  var nav = document.querySelector("[data-mobile-nav]");

  function openNav() {
    if (!nav) return;
    nav.classList.add("is-open");
    document.body.style.overflow = "hidden";
    if (openBtn) openBtn.setAttribute("aria-expanded", "true");
  }

  function closeNav() {
    if (!nav) return;
    nav.classList.remove("is-open");
    document.body.style.overflow = "";
    if (openBtn) openBtn.setAttribute("aria-expanded", "false");
  }

  if (openBtn) openBtn.addEventListener("click", openNav);
  if (closeBtn) closeBtn.addEventListener("click", closeNav);
  if (nav) {
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  // Same official homepage clip on desktop and mobile
  var heroVideo = document.querySelector("[data-hero-video]");
  if (heroVideo) {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    function setHeroVideo() {
      if (reduceMotion.matches) {
        heroVideo.pause();
        return;
      }
      heroVideo.muted = true;
      var play = heroVideo.play();
      if (play && play.catch) play.catch(function () {});
    }
    reduceMotion.addEventListener("change", setHeroVideo);
    setHeroVideo();
  }

  // Header gains a stronger background once you scroll past the hero
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // FAQ accordion
  document.querySelectorAll("[data-faq]").forEach(function (item) {
    var button = item.querySelector("button");
    if (!button) return;
    button.addEventListener("click", function () {
      var open = item.classList.contains("is-open");
      item.parentElement.querySelectorAll("[data-faq]").forEach(function (other) {
        other.classList.remove("is-open");
        var b = other.querySelector("button");
        var icon = other.querySelector("[data-faq-icon]");
        if (b) b.setAttribute("aria-expanded", "false");
        if (icon) icon.textContent = "+";
      });
      if (!open) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        var icon = item.querySelector("[data-faq-icon]");
        if (icon) icon.textContent = "–";
      }
    });
  });
})();
