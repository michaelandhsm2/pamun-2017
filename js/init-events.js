$(document).ready(function() {
  $('#bar-text').hide();
    $('ul.tabs').tabs();
    $('.parallax').parallax();

   $('.ep1').matchHeight();

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
