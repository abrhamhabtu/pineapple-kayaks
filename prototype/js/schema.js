(function () {
  var SITE = "https://www.pineapplekayakskauai.com";
  var business = {
    "@type": "LocalBusiness",
    "@id": SITE + "/#business",
    name: "Pineapple Kayaks Kauaʻi",
    alternateName: "Pineapple Kayaks",
    description: "Self-guided kayak rentals on Kauaʻi. Secret Falls on the Wailua River weekdays, Hanalei River any day, hotel delivery, and group rates.",
    url: SITE + "/",
    telephone: "+1-808-631-8035",
    image: [SITE + "/img/logo.png", SITE + "/img/fh/secret-falls-01.jpg", SITE + "/img/fh/hanalei-01.jpg"],
    logo: SITE + "/img/logo.png",
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Credit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3-4684 Kuhio Highway",
      addressLocality: "Lihue",
      addressRegion: "HI",
      postalCode: "96766",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.9969,
      longitude: -159.3368
    },
    areaServed: ["Kauai", "Lihue", "Kapaa", "Hanalei", "Poipu", "Princeville"],
    sameAs: [
      "https://www.instagram.com/pineapplekayakskauai/",
      "https://www.facebook.com/people/Pineapple-Kayaks-Kauai/61575252682457/",
      "https://www.yelp.com/biz/pineapple-kayaks-kaua-i-lihue"
    ]
  };

  var page = document.documentElement.getAttribute("data-page");
  var graph = [business];

  if (page === "home") {
    graph.push({
      "@type": "WebSite",
      "@id": SITE + "/#website",
      url: SITE + "/",
      name: "Pineapple Kayaks Kauaʻi",
      publisher: { "@id": SITE + "/#business" }
    });
    graph.push({
      "@type": "VideoObject",
      name: "How To Kayak To Secret Falls On Kauaʻi",
      description: "The Secret Falls paddle and hike: Wailua River, the trail, and the waterfall.",
      thumbnailUrl: "https://i.ytimg.com/vi/pljF-Cx5X94/maxresdefault.jpg",
      uploadDate: "2025-01-01",
      embedUrl: "https://www.youtube-nocookie.com/embed/pljF-Cx5X94",
      contentUrl: "https://www.youtube.com/watch?v=pljF-Cx5X94"
    });
  }

  if (page === "faq") {
    var items = [];
    document.querySelectorAll("[data-faq]").forEach(function (el) {
      var q = el.querySelector("button");
      var a = el.querySelector(".answer");
      if (!q || !a) return;
      items.push({
        "@type": "Question",
        name: q.textContent.replace(/\+$/, "").trim(),
        acceptedAnswer: { "@type": "Answer", text: a.textContent.trim() }
      });
    });
    graph.push({ "@type": "FAQPage", mainEntity: items });
  }

  var trips = {
    "secret-falls": {
      name: "Secret Falls Adventure",
      description: "Self-guided Wailua River kayak and hike to Uluwehi Falls. Monday–Friday only. From $45.",
      image: SITE + "/img/fh/secret-falls-01.jpg",
      price: "45",
      url: SITE + "/secret-falls"
    },
    hanalei: {
      name: "Hanalei River Adventure",
      description: "Self-guided Hanalei River kayak rental. Open 7 days. From $45.",
      image: SITE + "/img/fh/hanalei-01.jpg",
      price: "45",
      url: SITE + "/hanalei"
    },
    weekend: {
      name: "3-Day Weekend Kayak Rental",
      description: "Keep a kayak for three days. Secret Falls on a weekday, Hanalei on the weekend. From $150.",
      image: SITE + "/img/fh/weekend-01.jpg",
      price: "150",
      url: SITE + "/weekend"
    },
    groups: {
      name: "Group Kayak Rate",
      description: "Groups of 4 or more on Secret Falls or Hanalei. $40 per person.",
      image: SITE + "/img/fh/secret-falls-07.jpg",
      price: "40",
      url: SITE + "/groups"
    }
  };

  if (trips[page]) {
    var t = trips[page];
    graph.push({
      "@type": "Product",
      name: t.name,
      description: t.description,
      image: t.image,
      brand: { "@type": "Brand", name: "Pineapple Kayaks Kauaʻi" },
      offers: {
        "@type": "Offer",
        price: t.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: t.url
      }
    });
  }

  var script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph
  });
  document.head.appendChild(script);
})();
