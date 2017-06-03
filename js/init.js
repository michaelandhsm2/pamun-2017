$(document).ready(function() {
  $('.navbar-fixed').hide();
  $('.counter-1').counterUp({
    time: 1000
  });
  $('.counter-2').counterUp({
    time: 1170
  });
  $('.counter-3').counterUp({
    time: 1330
  });
  $('.counter-4').counterUp({
    time: 1500
  });

  $('.counter-4').waypoint(function() {
    setTimeout(function() {
      $(".counter-4").remove(),
        $(".counter-5").show()
    }, 1650);
  }, {
    offset: "100%",
    triggerOnce: !0
  });


  $('.parallax').parallax();

  // fade in .navbar
  $(function() {
    $(window).scroll(function() {
      // set distance user needs to scroll before we start fadeIn
      if ($(this).scrollTop() > 310) {
        $('.navbar-fixed').fadeIn();
      } else {
        $('.navbar-fixed').fadeOut();
      }
    });
  });


});
