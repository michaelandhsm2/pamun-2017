$(document).ready(function() {
  $('.navbar-fixed').hide();
  $('.footer-fixed').hide();
  $('#bar-text').hide();
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

  $('#v > li > img').hover(function() {
    if ($(this).attr('class') != 'active') {
      $('#nav li div').slideUp();
      $(this).next().slideToggle();
      $('#nav li img').removeClass('active');
      $(this).addClass('active');
    }
  });


  $('.parallax').parallax();
  $('.carousel').carousel({
    padding: 20,
    shift: 40,
    dist: -80
  });


  // fade in .navbar
  $(function() {
    $(window).scroll(function() {
      // set distance user needs to scroll before we start fadeIn
      if ($(this).scrollTop() > 700) {
        $('.footer-fixed').fadeIn();
        $('.navbar-fixed').fadeIn();
      } else {
        $('.footer-fixed').fadeOut();
        $('.navbar-fixed').fadeOut();
      }
    });
  });


  $('.final').waypoint(function(direction) {
   if (direction === 'down') {
     $('.tap-target').tapTarget('open');
     $('#bar-text').fadeIn();
   }
   else {
       $('.tap-target').tapTarget('close');
       $('#bar-text').fadeOut();
   }
 }, { offset: '80%' });

});
