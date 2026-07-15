/* Travel Smart — shared JS (jQuery) */
$(function () {
  // Mark active nav link from current filename
  var page = window.location.pathname.split("/").pop() || "index.html";
  if (!page || page === "/") {
    page = "index.html";
  }
  $(".navbar-ts .nav-link").each(function () {
    var href = $(this).attr("href");
    if (href === page) {
      $(this).addClass("active");
    }
  });

  // Floating navbar: glass denser on scroll
  var $shell = $(".nav-shell");
  function updateNavScroll() {
    if ($(window).scrollTop() > 24) {
      $shell.addClass("is-scrolled");
    } else {
      $shell.removeClass("is-scrolled");
    }
  }
  updateNavScroll();
  $(window).on("scroll", updateNavScroll);

  // Smooth collapse open/close feel on mobile
  $("#mainNav").on("show.bs.collapse hide.bs.collapse", function () {
    $shell.addClass("is-scrolled");
  });

  // Scroll reveal — always show after short fallback
  function revealOnScroll() {
    $(".reveal").each(function () {
      var top = $(this).offset().top;
      var winBottom = $(window).scrollTop() + $(window).height();
      if (winBottom > top + 40) {
        $(this).addClass("visible");
      }
    });
  }
  revealOnScroll();
  $(window).on("scroll", revealOnScroll);
  setTimeout(function () {
    $(".reveal").addClass("visible");
  }, 900);

  // Gallery filter — hide/show whole columns so layout stays clean
  $(".filter-bar .btn").on("click", function () {
    var filter = $(this).data("filter");
    $(".filter-bar .btn").removeClass("active");
    $(this).addClass("active");

    var $cards = $(".gallery-card");
    if (filter === "all") {
      $cards.stop(true, true).fadeIn(280);
    } else {
      $cards.hide();
      $cards.filter('[data-category="' + filter + '"]').fadeIn(280);
    }
  });

  // Gallery destination info (used by modal for all sections)
  var galleryInfo = {
    "maldives.jpg": {
      title: "Maldives",
      location: "Republic of Maldives, Indian Ocean",
      category: "Beach",
      desc: "Crystal lagoons and overwater villas make the Maldives a top pick for calm romantic getaways and snorkeling days.",
      best: "November – April (dry season)",
      highlight: "Overwater bungalows & house reefs",
      vibe: "Quiet · Luxury · Island time"
    },
    "bali.jpg": {
      title: "Bali",
      location: "Bali, Indonesia",
      category: "Beach",
      desc: "Cliff temples, surf beaches, and rice terraces blend beach days with rich island culture.",
      best: "April – October",
      highlight: "Uluwatu cliffs & beach clubs",
      vibe: "Creative · Tropical · Spiritual"
    },
    "santorini.jpg": {
      title: "Santorini",
      location: "Cyclades, Greece",
      category: "Beach",
      desc: "Whitewashed villages perched above the caldera — famous sunsets and volcanic black-sand beaches.",
      best: "May – June & September – October",
      highlight: "Oia sunset viewpoints",
      vibe: "Romantic · Scenic · Mediterranean"
    },
    "beach-phuket.jpg": {
      title: "Phuket",
      location: "Phuket, Thailand",
      category: "Beach",
      desc: "Thailand’s largest island with turquoise bays, limestone cliffs, and easy island-hopping day trips.",
      best: "November – April",
      highlight: "Phi Phi island day cruise",
      vibe: "Lively · Tropical · Easygoing"
    },
    "beach-hawaii.jpg": {
      title: "Hawaii",
      location: "Hawaiian Islands, USA",
      category: "Beach",
      desc: "Pacific waves, volcanic shores, and lush coastal trails across island chains.",
      best: "April – June & September – November",
      highlight: "Golden beaches & coastal drives",
      vibe: "Aloha · Adventure · Ocean"
    },
    "beach-seychelles.jpg": {
      title: "Seychelles",
      location: "Seychelles, East Africa",
      category: "Beach",
      desc: "Granite boulder beaches and powder-white sand — one of the world’s most unspoiled ocean escapes.",
      best: "April – May & October – November",
      highlight: "Anse Source d’Argent",
      vibe: "Remote · Pure · Peaceful"
    },
    "beach-bondi.jpg": {
      title: "Bondi Beach",
      location: "Sydney, Australia",
      category: "Beach",
      desc: "Iconic surf beach with a classic coastal walk, cafés, and a buzzing weekend energy.",
      best: "December – March (summer)",
      highlight: "Bondi to Coogee coastal walk",
      vibe: "Surf · Social · Sunny"
    },
    "beach-miami.jpg": {
      title: "Miami Beach",
      location: "Florida, USA",
      category: "Beach",
      desc: "Art Deco architecture meets warm Atlantic waters — perfect for beach days and nightlife.",
      best: "November – April",
      highlight: "South Beach & Ocean Drive",
      vibe: "Colorful · Funky · Coastal city"
    },
    "paris.jpg": {
      title: "Paris",
      location: "Paris, France",
      category: "City",
      desc: "The City of Light — museums, cafés, and the Eiffel Tower lighting the evening skyline.",
      best: "April – June & September – October",
      highlight: "Eiffel Tower & Seine walks",
      vibe: "Romantic · Cultural · Elegant"
    },
    "tokyo.jpg": {
      title: "Tokyo",
      location: "Tokyo, Japan",
      category: "City",
      desc: "Neon districts, quiet temples, Michelin eats, and ultra-efficient transit in Japan’s capital.",
      best: "March – May & October – November",
      highlight: "Shibuya Crossing & night views",
      vibe: "Futuristic · Busy · Delicious"
    },
    "newyork.jpg": {
      title: "New York",
      location: "New York City, USA",
      category: "City",
      desc: "Skyscrapers, parks, Broadway, and neighborhoods that feel like different cities in one.",
      best: "April – June & September – November",
      highlight: "Skyline views & Central Park",
      vibe: "Fast · Bold · Iconic"
    },
    "dubai.jpg": {
      title: "Dubai",
      location: "Dubai, United Arab Emirates",
      category: "City",
      desc: "Desert modernism — Burj Khalifa, marina walks, souks, and beach resorts in one skyline.",
      best: "November – March",
      highlight: "Burj Khalifa observation deck",
      vibe: "Luxury · Modern · Ambitious"
    },
    "london.jpg": {
      title: "London",
      location: "London, United Kingdom",
      category: "City",
      desc: "History and cool modern culture side by side — Big Ben, the Thames, markets, and museums.",
      best: "May – September",
      highlight: "Westminster & river walks",
      vibe: "Historic · Creative · Cosmopolitan"
    },
    "sydney.jpg": {
      title: "Sydney",
      location: "Sydney, Australia",
      category: "City",
      desc: "Harbour city famous for the Opera House, bridge climbs, and beaches minutes from downtown.",
      best: "September – November & March – May",
      highlight: "Sydney Opera House",
      vibe: "Sunny · Outdoor · Harbour life"
    },
    "city-singapore.jpg": {
      title: "Singapore",
      location: "Singapore",
      category: "City",
      desc: "Gardens by the Bay, hawker food, and one of Asia’s cleanest, greenest cityscapes.",
      best: "February – April",
      highlight: "Marina Bay skyline",
      vibe: "Clean · Futuristic · Foodie"
    },
    "city-hongkong.jpg": {
      title: "Hong Kong",
      location: "Hong Kong",
      category: "City",
      desc: "Harbour lights climb steep hills — ferries, street food, and dramatic night views.",
      best: "October – December",
      highlight: "Victoria Harbour night view",
      vibe: "Dense · Dynamic · Neon"
    },
    "city-barcelona.jpg": {
      title: "Barcelona",
      location: "Barcelona, Spain",
      category: "City",
      desc: "Gaudí architecture, Mediterranean plazas, and a walkable mix of beach and boulevard life.",
      best: "May – June & September",
      highlight: "Sagrada Família & Gothic Quarter",
      vibe: "Artistic · Laid-back · Coastal"
    },
    "city-seoul.jpg": {
      title: "Seoul",
      location: "Seoul, South Korea",
      category: "City",
      desc: "Palaces by day, neon K-culture nights — shopping, street food, and mountain trails in city limits.",
      best: "April – May & September – October",
      highlight: "Night markets & skyline",
      vibe: "Trendsetting · Electric · Friendly"
    },
    "swiss-alps.jpg": {
      title: "Swiss Alps",
      location: "Switzerland",
      category: "Mountain",
      desc: "Postcard peaks like the Matterhorn with alpine trains, hiking trails, and clean mountain air.",
      best: "June – September (hiking)",
      highlight: "Matterhorn viewpoints",
      vibe: "Fresh · Epic · Active"
    },
    "patagonia.jpg": {
      title: "Patagonia",
      location: "Chile & Argentina",
      category: "Mountain",
      desc: "Wind-swept ridges and glaciers at the edge of the world — made for serious outdoor lovers.",
      best: "November – March",
      highlight: "Torres del Paine day hikes",
      vibe: "Wild · Rugged · Raw"
    },
    "machu.jpg": {
      title: "Andean Peaks",
      location: "Peru",
      category: "Mountain",
      desc: "High Andes scenery surrounding ancient ruins — misty ridges and dramatic cloud forests.",
      best: "April – October (dry season)",
      highlight: "Mountain passes near Cusco",
      vibe: "Historic · High-altitude · Misty"
    },
    "iceland.jpg": {
      title: "Iceland",
      location: "Iceland",
      category: "Mountain",
      desc: "Waterfalls, volcanic valleys, and black coasts — a landscape that feels otherworldly.",
      best: "June – August (midnight sun)",
      highlight: "Ring Road waterfall stops",
      vibe: "Dramatic · Quiet · Magical"
    },
    "mountain-nepal.jpg": {
      title: "Himalayas",
      location: "Nepal",
      category: "Mountain",
      desc: "Home of Everest bases and tea-house treks through Sherpa villages and snow peaks.",
      best: "March – May & September – November",
      highlight: "Trekking routes & mountain vistas",
      vibe: "Spiritual · Challenging · Breathtaking"
    },
    "mountain-banff.jpg": {
      title: "Banff",
      location: "Alberta, Canada",
      category: "Mountain",
      desc: "Turquoise glacial lakes framed by Canadian Rockies — classic road-trip mountain country.",
      best: "June – September",
      highlight: "Lake Louise & Moraine Lake",
      vibe: "Crisp · Scenic · Outdoor"
    },
    "mountain-fuji.jpg": {
      title: "Mount Fuji",
      location: "Honshu, Japan",
      category: "Mountain",
      desc: "Japan’s sacred peak — iconic silhouette, shrine towns, and seasonal climbing routes.",
      best: "July – early September (summit season)",
      highlight: "Fuji views from lakeside towns",
      vibe: "Iconic · Peaceful · Inspiring"
    },
    "mountain-rocky.jpg": {
      title: "Rocky Mountains",
      location: "North America",
      category: "Mountain",
      desc: "Towering alpine walls and high meadows — national-park hiking heaven.",
      best: "June – September",
      highlight: "Alpine meadows & ridge trails",
      vibe: "Grand · Open · Adventurous"
    },
    "capetown.jpg": {
      title: "Table Mountain",
      location: "Cape Town, South Africa",
      category: "Mountain",
      desc: "A flat-topped landmark rising over Cape Town with cable-car views and coastal trails.",
      best: "March – May & September – November",
      highlight: "Summit deck panorama",
      vibe: "Urban mountain · Coastal · Bold"
    },
    "taj-mahal.jpg": {
      title: "Taj Mahal",
      location: "Agra, India",
      category: "Culture",
      desc: "A marble mausoleum and World Heritage icon — one of the most photographed monuments on earth.",
      best: "October – March",
      highlight: "Sunrise reflection views",
      vibe: "Romantic · Historic · Majestic"
    },
    "rome.jpg": {
      title: "Colosseum",
      location: "Rome, Italy",
      category: "Culture",
      desc: "Ancient Rome’s amphitheater still stands at the heart of a city layered with centuries of history.",
      best: "April – June & September – October",
      highlight: "Colosseum & Roman Forum",
      vibe: "Ancient · Timeless · Grand"
    },
    "cairo.jpg": {
      title: "Pyramids of Giza",
      location: "Cairo, Egypt",
      category: "Culture",
      desc: "The last remaining Wonder of the Ancient World — desert pyramids beside modern Cairo.",
      best: "October – April",
      highlight: "Giza plateau & Sphinx",
      vibe: "Legendary · Desert · Monumental"
    },
    "istanbul.jpg": {
      title: "Blue Mosque",
      location: "Istanbul, Turkey",
      category: "Culture",
      desc: "Ottoman architecture facing Hagia Sophia — where Europe and Asia meet across the Bosphorus.",
      best: "April – May & September – October",
      highlight: "Sultanahmet historic square",
      vibe: "Crossroads · Spiritual · Layered"
    },
    "culture-petra.jpg": {
      title: "Petra",
      location: "Petra, Jordan",
      category: "Culture",
      desc: "A rose-red city carved into cliffs — walking the Siq to the Treasury is unforgettable.",
      best: "March – May & September – November",
      highlight: "Al-Khazneh (The Treasury)",
      vibe: "Mysterious · Historic · Epic"
    },
    "culture-angkor.jpg": {
      title: "Angkor Wat",
      location: "Siem Reap, Cambodia",
      category: "Culture",
      desc: "The world’s largest religious monument complex — temples rising from jungle at sunrise.",
      best: "November – February",
      highlight: "Sunrise at Angkor Wat",
      vibe: "Sacred · Jungle · Wonder"
    },
    "culture-athens.jpg": {
      title: "Acropolis",
      location: "Athens, Greece",
      category: "Culture",
      desc: "Birthplace of democracy stories — the Parthenon crowns Athens with classical beauty.",
      best: "April – June & September – October",
      highlight: "Parthenon & Acropolis Museum",
      vibe: "Classic · Scholarly · Warm"
    },
    "culture-kyoto.jpg": {
      title: "Kyoto Temples",
      location: "Kyoto, Japan",
      category: "Culture",
      desc: "Zen gardens, wooden temples, and seasonal maple leaves — Japan’s cultural heart.",
      best: "March – May & November",
      highlight: "Temple gardens & tea houses",
      vibe: "Calm · Traditional · Poetic"
    },
    "culture-machu2.jpg": {
      title: "Machu Picchu",
      location: "Cusco Region, Peru",
      category: "Culture",
      desc: "Incan citadel high in the Andes — mist, stone terraces, and one of travel’s great bucket-list sights.",
      best: "April – October",
      highlight: "Citadel sunrise viewpoints",
      vibe: "Legendary · Remote · Spiritual"
    }
  };

  // Gallery modal — works for All / Beach / City / Mountain / Culture
  var galleryModalEl = document.getElementById("galleryModal");
  var galleryModal = galleryModalEl ? new bootstrap.Modal(galleryModalEl) : null;

  $(".gallery-item").on("click", function () {
    var $card = $(this).closest(".gallery-card");
    var $img = $(this).find("img");
    var src = $img.attr("src") || "";
    var file = src.split("/").pop();
    var info = galleryInfo[file] || {
      title: $img.attr("alt") || "Destination",
      location: $(this).find(".gallery-caption").text() || "",
      category: ($card.data("category") || "Travel").toString(),
      desc: "A Travel Smart featured destination. Ask our concierge to build a custom itinerary around this place.",
      best: "Year-round (check local seasons)",
      highlight: "Local landmarks & photo spots",
      vibe: "Explore · Discover · Travel Smart"
    };

    var catLabel = info.category || ($card.data("category") || "");
    catLabel = catLabel.charAt(0).toUpperCase() + catLabel.slice(1);

    $("#galleryModalTitle").text(info.title);
    $("#galleryModalImg").attr("src", src).attr("alt", info.title);
    $("#galleryModalCategory").text(catLabel);
    $("#galleryModalLocation").text(info.location);
    $("#galleryModalDesc").text(info.desc);
    $("#galleryModalBest").text(info.best);
    $("#galleryModalHighlight").text(info.highlight);
    $("#galleryModalVibe").text(info.vibe);

    if (galleryModal) {
      galleryModal.show();
    }
  });

  // Contact form (frontend only)
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    var name = $("#contactName").val().trim();
    var email = $("#contactEmail").val().trim();
    var message = $("#contactMessage").val().trim();

    if (!name || !email || !message) {
      showAlert("#contactAlert", "Please fill in all required fields.", true);
      return;
    }

    showAlert(
      "#contactAlert",
      "Thanks, " + name + "! Your message has been noted (demo — no backend).",
      false
    );
    this.reset();
  });

  // Concierge inquiry form — full field validation
  function setFieldError($field, isInvalid) {
    $field.toggleClass("is-invalid", !!isInvalid);
    $field.toggleClass("is-valid", !isInvalid && $field.val().toString().trim() !== "");
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  $("#conciergeForm").on("submit", function (e) {
    e.preventDefault();

    var $name = $("#guestName");
    var $email = $("#guestEmail");
    var $dest = $("#destInterest");
    var $package = $("#packagePick");
    var $notes = $("#tripNotes");

    var name = $name.val().trim();
    var email = $email.val().trim();
    var dest = $dest.val().trim();
    var pkg = $package.val();
    var notes = $notes.val().trim();

    var nameOk = name.length >= 2;
    var emailOk = isValidEmail(email);
    var destOk = dest.length >= 2;
    var pkgOk = pkg !== "" && pkg != null;
    var notesOk = notes.length >= 10;

    setFieldError($name, !nameOk);
    setFieldError($email, !emailOk);
    setFieldError($dest, !destOk);
    setFieldError($package, !pkgOk);
    setFieldError($notes, !notesOk);

    if (!nameOk || !emailOk || !destOk || !pkgOk || !notesOk) {
      var msg = "Please fix the highlighted fields:";
      if (!nameOk) msg += " name,";
      if (!emailOk) msg += " email,";
      if (!destOk) msg += " destination,";
      if (!pkgOk) msg += " package,";
      if (!notesOk) msg += " notes,";
      msg = msg.replace(/,$/, "") + ".";
      showAlert("#conciergeAlert", msg, true);
      $("#conciergeForm .is-invalid").first().focus();
      return;
    }

    var pkgLabel = $("#packagePick option:selected").text();
    showAlert(
      "#conciergeAlert",
      "Thanks, " + name + "! Request for " + dest + " (" + pkgLabel + ") received. Our concierge will follow up (demo).",
      false
    );
    this.reset();
    $("#conciergeForm .form-control, #conciergeForm .form-select").removeClass("is-invalid is-valid");
  });

  // Live clear errors while typing on concierge form
  $("#conciergeForm").on("input change", ".form-control, .form-select", function () {
    var $field = $(this);
    var id = $field.attr("id");
    var val = $field.val().toString().trim();
    var ok = true;

    if (id === "guestName" || id === "destInterest") ok = val.length >= 2;
    else if (id === "guestEmail") ok = isValidEmail(val);
    else if (id === "packagePick") ok = val !== "";
    else if (id === "tripNotes") ok = val.length >= 10;

    if ($field.hasClass("is-invalid") || $field.hasClass("is-valid")) {
      setFieldError($field, !ok);
    }
  });

  // Feedback form
  $("#feedbackForm").on("submit", function (e) {
    e.preventDefault();
    var name = $("#feedbackName").val().trim();
    var rating = $('input[name="rating"]:checked').val();
    var comments = $("#feedbackComments").val().trim();

    if (!name || !rating || !comments) {
      showAlert("#feedbackAlert", "Please complete name, rating, and comments.", true);
      return;
    }

    showAlert(
      "#feedbackAlert",
      "Thanks " + name + "! You rated us " + rating + "/5. Feedback saved locally (demo).",
      false
    );
    this.reset();
  });

  function showAlert(selector, text, isError) {
    var $el = $(selector);
    $el
      .removeClass("d-none")
      .toggleClass("border-danger", !!isError)
      .text(text)
      .fadeIn(200);
    setTimeout(function () {
      $el.fadeOut(400, function () {
        $el.addClass("d-none").show();
      });
    }, 4500);
  }

  // World events: filter by region
  $("#eventRegion").on("change", function () {
    var region = $(this).val();
    if (region === "all") {
      $(".event-row").slideDown(200);
    } else {
      $(".event-row").each(function () {
        if ($(this).data("region") === region) {
          $(this).slideDown(200);
        } else {
          $(this).slideUp(200);
        }
      });
    }
  });

  // Reviews horizontal slider (works on About + Feedback)
  $(".reviews-slider-wrap").each(function () {
    var $wrap = $(this);
    var $track = $wrap.find(".reviews-track");
    var $dotsBox = $wrap.find(".reviews-dots");
    var $cards = $track.find(".review-card");
    var total = $cards.length;
    if (!total) return;

    var index = 0;
    var timer = null;
    $dotsBox.empty();

    function goTo(i) {
      index = (i + total) % total;
      $track.css("transform", "translateX(" + -index * 100 + "%)");
      $dotsBox.find("button").removeClass("active").eq(index).addClass("active");
    }

    for (var d = 0; d < total; d++) {
      (function (dotIndex) {
        var $dot = $("<button type='button' aria-label='Go to review " + (dotIndex + 1) + "'></button>");
        if (dotIndex === 0) $dot.addClass("active");
        $dot.on("click", function () {
          goTo(dotIndex);
          restartAuto();
        });
        $dotsBox.append($dot);
      })(d);
    }

    function next() {
      goTo(index + 1);
    }
    function prev() {
      goTo(index - 1);
    }
    function restartAuto() {
      clearInterval(timer);
      timer = setInterval(next, 4500);
    }

    $wrap.find(".reviews-next").on("click", function () {
      next();
      restartAuto();
    });
    $wrap.find(".reviews-prev").on("click", function () {
      prev();
      restartAuto();
    });
    $wrap.find(".reviews-slider").on("mouseenter", function () {
      clearInterval(timer);
    }).on("mouseleave", function () {
      restartAuto();
    });

    goTo(0);
    restartAuto();
  });

  // FAQ category filter (About Us)
  $(".faq-cat-btn").on("click", function () {
    var cat = $(this).data("faq-cat");
    $(".faq-cat-btn").removeClass("active");
    $(this).addClass("active");

    $("#aboutFaq .accordion-collapse.show").collapse("hide");

    $(".faq-item").each(function () {
      if (cat === "all" || $(this).data("faq-cat") === cat) {
        $(this).stop(true, true).slideDown(200);
      } else {
        $(this).stop(true, true).slideUp(200);
      }
    });
  });
});
