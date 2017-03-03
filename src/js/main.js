jQuery(function ($) {
  var $window = $(window),
      $header = $('.navbar-default'),
      windowHeight = window.innerHeight,
      $carousel = $('.carousel'),
      $workList = $('.works-list'),
      $navbarLink = $('.navbar-nav li a'),
      $scrollTop = $('.scroll-top');

  $carousel.carousel({ pause: null });

  $navbarLink.on('click', function () {
    $(this)
      .closest('.navbar-collapse')
      .removeClass('in');
  });

  if ($window.width() < 768) {
    $workList.owlCarousel({
      loop: true,
      smartSpeed: 450,
      items: 1
    });
  }

  $window
    .scroll(function () {
      if ($('.navbar-nav').length) {
        var position = $(this).scrollTop(),
            navbarLinks = $('.navbar-nav li a[href^="#"]');

        navbarLinks.each(function (index, element) {
          var anchorId = $(element).attr('href'),
              target = $(anchorId).offset().top - offset - 50;

          if (position >= target) {
            navbarLinks.parent().removeClass("active");
            $(element).parent().addClass('active');
          }
        });

        if ($window.scrollTop() + $window.height() == $(document).height()) {
          $('.navbar-nav li').removeClass('active');
          $('.navbar-nav li:last-child').addClass('active');
        }
      }

      if ($window.scrollTop() > $window.height() / 2) {
        $scrollTop.show();
      } else {
        $scrollTop.hide();
      }

      if ($window.scrollTop() + 75 >= windowHeight) {
        $header.addClass('visible');
      } else {
        $header.removeClass('visible');
      }
    })
    .resize(function () {
      windowHeight = window.innerHeight;
    });

  var offset = 0;

  $('a[href^="#"]').click(function (e) {
    e.preventDefault();

    var anchorId = $(this).attr('href'), // The id of the section we want to go to
        target = $(anchorId).offset().top - offset; // Our scroll target : the top position of the section that has the id referenced by our href

    $('html, body').stop().animate({scrollTop: target - 40}, 1000, function () {
      window.location.hash = anchorId;
    });

    return false;
  });
});