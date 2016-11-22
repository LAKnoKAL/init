var $window = $(window),
    $header = $('.navbar-default'),
    windowHeight = window.innerHeight,
    $carousel = $('.carousel');

$carousel.carousel({
  pause: null
});

$(window)
  .scroll(function () {
    if ($window.scrollTop() + 75 >= windowHeight) {
      $header.addClass('visible');
    } else {
      $header.removeClass('visible');
    }
  })
  .resize(function () {
    windowHeight = window.innerHeight;
  })
;