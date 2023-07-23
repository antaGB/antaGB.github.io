$(window).ready(function () {
  // loader
  $(".loader")
    .delay(1000)
    .queue(function (next) {
      $(".loader").addClass("remove");

      next();
    });

  // toggle navbar
  $("#nav-btn").click(function () {
    // open and close mobile navbar
    $("#nav-links").toggleClass("active");

    // if the navbar is open, body overflow is hidden
    if ($("#nav-links").hasClass("active")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "auto");
    }
  });

  $(".nav-link").click(function () {
    $("#nav-links").removeClass("active");
    $("body").css("overflow", "auto");
  });
});
