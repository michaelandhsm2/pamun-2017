$(document).ready(function() {
  $('.navbar-fixed').hide();
  $('.parallax').parallax();

      // fade in .navbar
      $(function () {
          $(window).scroll(function () {
                   // set distance user needs to scroll before we start fadeIn
              if ($(this).scrollTop() > 700) {
                  $('.navbar-fixed').fadeIn();
              } else {
                  $('.navbar-fixed').fadeOut();
              }
          });
      });

});
