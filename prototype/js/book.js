(function () {
  var COMPANY = "redeyesnackshack";
  var FLOW = "1122156";
  var trips = {
    "secret-falls": {
      name: "Secret Falls",
      blurb: "Wailua River + waterfall hike · Mon–Fri",
      price: "From $45",
      item: 560856,
      photo: "img/fh/secret-falls-01.jpg"
    },
    hanalei: {
      name: "Hanalei River",
      blurb: "Calm North Shore paddle · 7 days",
      price: "From $45",
      item: 727496,
      photo: "img/fh/hanalei-01.jpg"
    },
    weekend: {
      name: "3-Day Weekend",
      blurb: "Keep the kayak · both rivers",
      price: "From $150",
      item: 727495,
      photo: "img/fh/weekend-01.jpg"
    },
    groups: {
      name: "Groups of 4+",
      blurb: "$40 a person on Secret Falls",
      price: "From $40",
      item: 748682,
      photo: "img/fh/secret-falls-07.jpg"
    }
  };

  function embedUrl(item) {
    return "https://fareharbor.com/embeds/book/" + COMPANY + "/items/" + item + "/?full-items=yes&flow=" + FLOW;
  }

  function catalogUrl() {
    return "https://fareharbor.com/embeds/book/" + COMPANY + "/items/?full-items=yes&flow=" + FLOW;
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  var hash = (location.hash || "").replace("#", "");
  var selected = trips[hash] ? hash : null;
  var root = document.querySelector("[data-book]");
  if (!root) return;

  function picker() {
    return (
      '<div class="book-panel">' +
        "<h2>Which adventure?</h2>" +
        '<p class="muted">Real availability and checkout are FareHarbor — same calendar the shop uses.</p>' +
        '<div class="trip-list">' +
          Object.keys(trips).map(function (id) {
            var t = trips[id];
            return (
              '<button type="button" class="trip" data-trip="' + id + '">' +
                '<img class="trip-photo" src="' + esc(t.photo) + '" alt="">' +
                "<div><div class=\"trip-name\">" + esc(t.name) + "</div><div class=\"trip-meta\">" + esc(t.blurb) + "</div></div>" +
                '<div class="trip-price">' + esc(t.price) + "</div>" +
              "</button>"
            );
          }).join("") +
        "</div>" +
        '<p class="muted" style="margin-top:16px"><a href="' + catalogUrl() + '" target="_blank" rel="noopener">Open the full FareHarbor list</a></p>' +
      "</div>"
    );
  }

  function calendar(id) {
    var t = trips[id];
    return (
      '<div class="book-panel">' +
        '<p><a href="/book" data-all>← All adventures</a></p>' +
        "<h2>" + esc(t.name) + "</h2>" +
        '<p class="muted">' + esc(t.blurb) + " · " + esc(t.price) + "</p>" +
        '<div class="fh-embed">' +
          '<iframe title="Book ' + esc(t.name) + '" src="' + embedUrl(t.item) + '" loading="lazy"></iframe>' +
        "</div>" +
        '<p class="muted" style="margin-top:14px">Questions: <a href="tel:8086318035">808-631-8035</a></p>' +
      "</div>"
    );
  }

  function render() {
    root.innerHTML = selected ? calendar(selected) : picker();
    root.querySelectorAll("[data-trip]").forEach(function (el) {
      el.addEventListener("click", function () {
        selected = el.getAttribute("data-trip");
        history.replaceState(null, "", "/book#" + selected);
        window.scrollTo(0, 0);
        render();
      });
    });
    var all = root.querySelector("[data-all]");
    if (all) {
      all.addEventListener("click", function (e) {
        e.preventDefault();
        selected = null;
        history.replaceState(null, "", "/book");
        window.scrollTo(0, 0);
        render();
      });
    }
  }

  window.addEventListener("hashchange", function () {
    var next = (location.hash || "").replace("#", "");
    selected = trips[next] ? next : null;
    render();
  });

  render();
})();
