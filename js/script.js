$(document).ready(function () {
  "use strict";
  // -----------------------------
  //  Headroom Initialize
  // -----------------------------
  $('.site-navigation').headroom();
  // -----------------------------
  //  Smooth Scroll to Section
  // -----------------------------
  $('a.page-scroll').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 60)
    }, 500);
    event.preventDefault();
    if (screen.width < 992) {
      $('.navbar-toggler').click();
    }
  });
});