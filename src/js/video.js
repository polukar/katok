import $ from 'jquery';
const video = () => {
  $(window).on('load', function () {
    var elemWidth = $('.protection__video iframe').width();
    var elemHeight = (elemWidth * 9) / 16;
    $('.protection__video iframe').css({
      'height': elemHeight + 'px'
    })
  })
  $(window).on('resize', function () {
    var elemWidth = $('.protection__video iframe').width();
    var elemHeight = (elemWidth * 9) / 16;
    $('.protection__video iframe').css({
      'height': elemHeight + 'px'
    })
  })
}

export { video };