import { ACTIVE, OPEN, DOC } from './../constants';
import fancybox from '@fancyapps/fancybox';

$('[data-fancybox]').fancybox({ animationDuration: 550, loop: true });

// $('[data-fancybox]').click(function() {
//   if($('#mobile').is(':visible')) {
//     return false;
//   }
// });
$('.js-photo-gallery-trigger').on('click', function() {
  const gallery = $(this)
    .closest('.js-shops')
    .find('.js-photo-gallery');
  $(gallery).addClass(ACTIVE);
});

export const initSliderButtonsEvents = () => {
  $('.js-slide-expand').on('click', function() {
    const activeSlide = $(this)
      .closest('.js-photo-gallery')
      .find('.slick-active .shops-slider__slide');
    $(activeSlide).trigger('click');
  });

  $('.js-slide-zoom').on('click', function() {
    const activeSlide = $(this)
      .closest('.js-photo-gallery')
      .find('.slick-active .shops-slider__slide');
    
    $(activeSlide).css('transform', 'scale(0.9)');
  });
};
