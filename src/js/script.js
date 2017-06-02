(function ($) {
  var MOBILE = DESKTOP = false,
      siz = $('#sizer').width();
  siz > 8 ? DESKTOP = true: MOBILE = true;

  function initialiseCarousel() {
    $('.carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true
    });
  }
  function disabledLinks() {
    $('.menuOptions a').on('click', function(e) {
      e.preventDefault();
    });
    $('.footerOptions a').on('click', function(e) {
      e.preventDefault();
    });
    $('.socialOptions a').on('click', function(e) {
      e.preventDefault();
    });
  }
  function showLinks() {
    $('.menu').on('click', function() {
      if($('.menuOptions').hasClass('open')) {
        $('.menuOptions').removeClass('open');
        $('.menuOptions').slideUp(400);
      }else {
        $('.menuOptions').addClass('open');
        $('.menuOptions').slideDown(400);
        $('.menuOptions').css('display', 'inline-block');
      }
    });
  }
  function animateImage() {
    if(DESKTOP) {
      $('.horizontal-flip-container').on('mouseenter', function() {
        $(this).addClass('hover');
      }).on('mouseleave', function() {
        $(this).removeClass('hover');
      });
      $('.vertical-flip-container').on('mouseenter', function() {
        $(this).addClass('hover');
      }).on('mouseleave', function() {
        $(this).removeClass('hover');
      });
    }
    if(MOBILE) {
      $('.horizontal-flip-container').on('click', function() {
        if($(this).hasClass('hover')) {
          $(this).removeClass('hover');
        }else {$(this).addClass('hover');}
      });
      $('.vertical-flip-container').on('click', function() {
        if($(this).hasClass('hover')) {
          $(this).removeClass('hover');
        }else {$(this).addClass('hover');}
      });
    }
  }
  function runScripts() {
    initialiseCarousel();
    disabledLinks();
    showLinks();
    animateImage();
  }
  $(document).ready(runScripts);
})(jQuery);
