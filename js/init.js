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
      $(activeItem).animate({width: "16.25%"}, {duration:300, queue:false});
      $(this).animate({width: "37%"}, {duration:300, queue:false});
      activeItem = this;
  });

  activeItem2 = $("#v-accordion li:first #panel");
  $(activeItem2).addClass('active');

  $("#v-accordion li img").hover(function(){
      $(activeItem2).animate({height: "0px"}, {duration:300, queue:false});
      $(this).parent().find('#panel').animate({height: "400px"}, {duration:300, queue:false});
      activeItem2 = this;
  });

  $('#v > li > img').hover(function(){
      if ($(this).attr('class') != 'active'){
        $('#nav li div').slideUp();
        $(this).next().slideToggle();
        $('#nav li img').removeClass('active');
        $(this).addClass('active');
      }
  });


  $('.parallax').parallax();
  $('.carousel').carousel();
  

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
