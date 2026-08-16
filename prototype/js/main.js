(function () {
  var openBtn = document.querySelector("[data-open-nav]");
  var closeBtn = document.querySelector("[data-close-nav]");
  var nav = document.querySelector("[data-mobile-nav]");

  function openNav() {
    if (!nav) return;
    nav.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    if (!nav) return;
    nav.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  if (openBtn) openBtn.addEventListener("click", openNav);
  if (closeBtn) closeBtn.addEventListener("click", closeNav);
  if (nav) {
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
  }

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
