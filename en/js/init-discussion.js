$(document).ready(function() {
  $('#bar-text').hide();
    $('ul.tabs').tabs();
    $('.parallax').parallax();

   $('.unsc').matchHeight();
      $('.unsc2').matchHeight();


         $('.here').waypoint(function(direction) {
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
