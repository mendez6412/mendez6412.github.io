$('#navbar-items').on('activate.bs.scrollspy', function () {
  if ($('.test').hasClass('active')) {
    console.log("yes")
    $('.magic').css('color', '#4682b4')
    $('.navbar-default .navbar-nav>.active>a').css('background-color', 'transparent')
  }
  else {
    $('.magic').css('color', '#f8f8f8')
  }
  $('.ignore').css({'visibility':'hidden'});
})

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})
