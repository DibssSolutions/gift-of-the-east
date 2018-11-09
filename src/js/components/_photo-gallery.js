import { ACTIVE, OPEN, DOC, BODY } from './../constants';
import fancybox from '@fancyapps/fancybox';

$('[data-fancybox]').fancybox({ animationDuration: 550, loop: true });

$('.js-photo-gallery-trigger').on('click', function() {
  const shops = $(this).closest('.js-shops');
  // ==== ACTIVATION OVERLAY ====
  $(shops).addClass(OPEN);
  // ==== ACTIVATION GALLERY ====
  $(shops)
    .find('.js-photo-gallery')
    .addClass(ACTIVE);
  // ==== HIDE ANOTHER SHOPS ====
  $(shops)
    .find('.js-shop')
    .addClass('is-hidden')
    .removeClass(ACTIVE);
  // ==== ACTIVATE TARGET SHOP ====
  $(this)
    .closest('.js-shop')
    .addClass(ACTIVE);
});

export const initSliderButtonsEvents = () => {
  $('.js-slide-expand').on('click', function() {
    const activeSlide = $(this)
      .closest('.js-photo-gallery')
      .find('.slick-active .shops-slider__slide');
    $(activeSlide).trigger('click');
  });

  function zoom(el, size) {
    const trans = $(el).css('transform');
    var numberPattern = /[+-]?([0-9]*[.])?[0-9]+/g;
    var values = trans.match(numberPattern);
    var newScale = parseFloat(values[0], 3);
    newScale *= size;
    $(el).css('transform', `scale(${newScale})`);
  }

  $('.js-slide-zoom').on('click', function() {
    const activeSlide = $(this)
      .closest('.js-photo-gallery')
      .find('.slick-active .shops-slider__slide');
    zoom($(activeSlide), 1.05);
  });

  $('.js-slide-decrease').on('click', function() {
    const activeSlide = $(this)
      .closest('.js-photo-gallery')
      .find('.slick-active .shops-slider__slide');
    zoom($(activeSlide), 0.98);
  });

  BODY.on('click', function(e) {
    if ($(e.target).hasClass('js-gallery-overlay')) {
      const shops = $(e.target).closest('.js-shops');
      $(shops).removeClass(OPEN);
      $(shops)
        .find('.js-photo-gallery')
        .removeClass(ACTIVE);
      $(shops)
        .find('.js-shop')
        .removeClass('is-hidden');
    }
  });
};
