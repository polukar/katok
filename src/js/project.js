import $ from 'jquery';
const project = () => {

  $('.time').on('click', function () {
    if (!$(this).hasClass('--disabled')) {
      $(this).addClass('active').siblings().removeClass('active');
      $(this).parents('.popup__right-item').find('.next').removeClass('--disabled');
    }
  });

  $('.popup__close').on('click', function () {
    $(this).parents('.popup').fadeOut();
    $('body').removeClass('--frozen');
  });

  $('.qr-popup__close').on('click', function () {
    $(this).parents('.qr-popup').fadeOut();
    $('body').removeClass('--frozen');
  });

  $('.--open-popup').on('click', function () {
    $('.popup').fadeIn();
    $('body').addClass('--frozen');
    var title = $(this).data('title');
    $('.popup__title').empty().text(title);
  });

  $('.--open-qrpopup').on('click', function () {
    $('.qr-popup').fadeIn();
    $('body').addClass('--frozen');
  });

  $('.accardeon__main').on('click', function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      $(this).nextAll('.accardeon__drop').slideDown();
    } else {
      $(this).removeClass('active');
      $(this).nextAll('.accardeon__drop').slideUp();
    }
  });
  $(window).on('load', function () {
    var scrolltags = $('.tags__list').offset().top;

    $(window).on('scroll', function () {
      if ($(document).scrollTop() > 600) {
        $('.fiex-header ').addClass('active')
      } else {
        $('.fiex-header ').removeClass('active')
      };

      if ($(document).scrollTop() > scrolltags) {
        $('.tags__list .container').addClass('active');
      } else {
        $('.tags__list .container').removeClass('active');
      }

      $('.master').each(function () {
        var id = $(this).attr('id');
        var elemOffset = $(this).offset().top - 220;
        var elemHeight = $(this).innerHeight() + elemOffset;
        var scrollTop = $(document).scrollTop();
        if (scrollTop > elemOffset && elemOffset < elemHeight) {
          $('.tags__item[href="#' + id + '"]').addClass('active').siblings().removeClass('active');
        } else if (scrollTop < $('.master:eq(0)').offset().top) {
          $('.tags__item').removeClass('active');
        }

      });



    })
  });

  $('.burger').on('click', function () {
    $('.mobile-nav').fadeIn();
  });

  $('.mobile-nav-close').on('click', function () {
    $('.mobile-nav').fadeOut();
  });

  $('.mobile-nav .nav__link').on('click', function () {
    $('.mobile-nav').fadeOut();
  })



  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 120
    }, 800);
  });


  $(window).on('load', function () {
    if ($(window).width() > 980) {
      $('.master__pic img:last-child, .main__content .before').each(function () {
        var offsetTop = $(this).offset().top / 10;
        $(this).css({
          'transform': "translateY(" + offsetTop + "px)"
        });
      });

      $(window).on('scroll', function () {
        $('.master__pic img:last-child, .main__content .before').each(function () {
          var paralax = ($(document).scrollTop() - $(this).offset().top) / 15;
          $(this).css({
            'transform': "translateY(" + -paralax + "px)"
          });
        })
      })
      $('.master__pic img:first-child, .main__content .after').each(function () {
        var offsetTop = $(this).offset().top / 20;
        $(this).css({
          'transform': "translateY(" + -offsetTop + "px)"
        });
      });

      $(window).on('scroll', function () {
        $('.master__pic img:first-child, .main__content .after').each(function () {
          var paralax = ($(document).scrollTop() - $(this).offset().top) / 15;
          $(this).css({
            'transform': "translateY(" + paralax + "px)"
          });
        })
      })
    }
  })





}


export { project };