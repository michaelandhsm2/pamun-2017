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

  activeItem = $("#accordion li:first");
  $(activeItem).addClass('active');

  $("#accordion li").hover(function(){
      $(activeItem).animate({width: "25%"}, {duration:300, queue:false});
      $(this).animate({width: "50%"}, {duration:300, queue:false});
      activeItem = this;
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
