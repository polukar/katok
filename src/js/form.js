import $ from 'jquery';
import Inputmask from 'inputmask';

const validation = () => {
  $('input').on('keyup', function () {
    if ($(this).val().length > 0) {
      $(this).siblings('.input__placeholder').addClass('active')
    } else {
      $(this).siblings('.input__placeholder').removeClass('active')
    }
  });

  $('input.requared').on('keyup', function () {
    if ($(this).val().length > 0) {
      $(this).addClass('--succed');
    } else {
      $(this).removeClass('--succed');
    }

    var lengthInputs = $(this).parents('form').find('.requared').length;
    var lengthLength = $(this).parents('form').find('.--succed').length;
    if (lengthInputs == lengthLength) {
      $(this).parents('form').find('.next').removeClass('--disabled')
    }
  });

  $('.qr-popup .next').on('click', function (e) {
    e.preventDefault();
    if (!$(this).hasClass('--disabled')) {
      $(this).parents('.qr-popup__panel').removeClass('active');
      $(this).parents('.qr-popup__panel').next('.qr-popup__panel').addClass('active');
    }
  })


}



const select = () => {
  $('.select__main').on('click', function () {
    $('.select__main').removeClass('active')
    $('.select__drop').fadeOut();
    if (!$(this).hasClass('active')) {
      $(this).addClass('active')
      $(this).siblings('.select__drop').fadeIn();
    } else {
      $(this).removeClass('active')
      $(this).siblings('.select__drop').fadeOut();
    }
  })

  $('.select__item').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var text = $(this).text();
    $(this).parents('.select').find('.select__main').removeClass('active');
    $(this).parents('.select').find('.select__main').find('input').val(text);
    $(this).parents('.select__drop').fadeOut();
  })


  $(document).on('click', function (e) {
    var select = $('.select');
    if (!select.is(e.target) && select.has(e.target).length === 0) {
      $('.select__drop').fadeOut();
      $('.select__main').removeClass('active');
    }
  });


  $('.clear__filter').on('click', function (e) {
    $('.select__main').each(function () {
      $(this).find('input').val('');
    });
    $('.select__item').removeClass('active');
  })
}



const mask = () => {
  const tel = document.querySelectorAll('.-js-mask');
  Inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false,
  }).mask(tel);
}


const switcher = () => {
  const switcher = document.querySelectorAll('.switch');
  const partic = document.querySelector('.partic');
  if (switcher) {
    switcher.forEach(elem => {
      elem.addEventListener('click', function () {
        elem.classList.toggle('active');
        if (partic) {
          if (elem.classList.contains('switch-partic') && elem.classList.contains('active')) {
            partic.classList.add('active')
          } else {
            partic.classList.remove('active')
          }
        }

      })
    })
  }
}

const addChild = () => {
  $('.add-child').on('click', function () {
    var place = '<div class="place__item"> <div class="input"><input type="text"><div class="input__placeholder">ФИО</div></div><div class="select"><div class="select__main input"><input type="text" value="Зритель" disabled=""></div><div class="select__drop"><div class="select__item active">Зритель</div><div class="select__item">Участник</div></div></div></div>';
    var placeHtml = $('.place').html();
    if ($('.place__item').length == 3) {
      $('.place').html(placeHtml + place);
      $('.add-child').remove();
      select();
    } else {
      $('.place').html(placeHtml + place);
      select();
    }
  });
}


export { validation, select, mask, switcher, addChild };