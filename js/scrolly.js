$('#navbar-items').on('activate.bs.scrollspy', function () {
  if ($('.test').hasClass('active')) {
    $('.magic').css('color', '#4682b4')
    $('.navbar-default .navbar-nav>.active>a').css('background-color', 'transparent')
  }
  else {
    $('.magic').css('color', '#f8f8f8')
    $('.navbar-default .navbar-nav>.active>a').css('background-color', 'transparent')
  }
  $('.ignore').css({'visibility':'hidden'});
})

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
