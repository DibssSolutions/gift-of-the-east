import {
  widthMD,
  widthSM,
  WIN_WIDTH
} from '../constants';

const parent = $('.js-cursor-parent');
parent.each((i, el) => {
  const parent = $(el);
  const cursor = parent.find('.js-cursor');
  const slider = parent.find('.js-product-slider');
  if (WIN_WIDTH > widthSM) {
    parent.on('mousedown', () => {
      console.log(parent);
      parent.addClass('is-focused');
    // slider.css({'cursor' : 'none'});
    });
    parent.on('mouseup', () => {
      parent.removeClass('is-focused');
    // slider.css({'cursor' : 'grab'});
    });
    parent.on('click', () => {
    // parent.removeClass('is-focused');
    // slider.css({'cursor' : 'grab'});
      console.log(1);
    });
    parent.mousemove((event) => {
      let positionParent = parent[0].getBoundingClientRect();
      cursor.css({
        'top' : event.pageY - (positionParent.top + pageYOffset) + 'px',
        'left' : event.pageX - (positionParent.left + pageXOffset) + 'px'
      });
    });
  }
});
