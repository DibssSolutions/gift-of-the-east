import { OPEN, ACTIVE, widthMD, widthSM, WIN, BODY } from '../constants';
import Popper from 'popper.js';

(function() {
  const drop = $('.js-drop');
  const btn = $('.js-open-drop');
  const closeBtn = $('.js-close-drop');
  const dropHidden = $('.js-drop-hidden');
  const btnOpen = $('.js-open-drop.is-open');
  const products = $('.product');
  const dropWrapHeights = [];

  const priceBelowBtn = $('.js-price-below .js-open-drop');

  // add btn-text
  btn.each((i, el) => {
    const _this = $(el);
    const btnText = _this.find('.js-drop-btn-text');
    const textOpen = _this.data('text-open');
    btnText.text(textOpen);
  });

  btn.on('click', function(e) {
    e.preventDefault();
    const _this = $(this);
    const thisDrop = _this.parents('.js-drop');
    const thisShoppingDrop = _this.parents('.js-drop.shopping-card__main');
    const hiddenBlock = thisDrop.find('.js-drop-hidden');
    const textOpen = _this.data('text-open');
    const textClose = _this.data('text-close');
    const btnTextWrap = _this.find('.js-drop-btn-text');
    const duration = 400;
    if (!_this.hasClass(OPEN)) {
      priceBelowBtn.removeClass(OPEN);
      _this.addClass(OPEN);
      btnTextWrap.text(textClose);
      hiddenBlock.slideDown(duration);
      thisShoppingDrop.addClass(ACTIVE);
    } else {
      _this.removeClass(OPEN);
      btnTextWrap.text(textOpen);
      hiddenBlock.slideUp(duration);
      thisShoppingDrop.removeClass(ACTIVE);
    }
  });

  closeBtn.on('click', function(e) {
    e.preventDefault();
    const _this = $(this);
    const thisShoppingDrop = _this.parents('.js-drop.shopping-card__main');
    const hiddenBlock = thisShoppingDrop.find('.js-drop-hidden');
    const anotherCloseBtn = thisShoppingDrop.find('.js-open-drop');
    const textOpen = anotherCloseBtn.data('text-open');
    const btnTextWrap = anotherCloseBtn.find('.js-drop-btn-text');
    const duration = 400;
    hiddenBlock.slideUp(duration);
    thisShoppingDrop.removeClass(ACTIVE);
    anotherCloseBtn.removeClass(OPEN);
    btnTextWrap.text(textOpen);
    
  });

  const getPosition = (el, arg) => {
    if (arg[0].placement === 'bottom-start' || arg[0].placement === 'bottom') {
      el.removeClass('is-top-pos').addClass('is-bottom-pos');
    } else {
      el.removeClass('is-bottom-pos').addClass('is-top-pos');
    }
  };
  const priceBelow = $('.js-price-below');
  priceBelow.each((i, el) => {
    const that = $(el);
    const reference = that.find('.js-open-drop')[0];
    const popper = that.find('.js-drop-hidden')[0];
    const position = that.data('drop-position') || 'bottom-start';
    var anotherPopper = new Popper(reference, popper, {
      placement: position,
      onCreate: function() {
        getPosition(that, arguments);
      },
      onUpdate: function() {
        getPosition(that, arguments);
      }
    });
  });

  BODY.on('click', e => {
    if ($(e.target).closest('.js-price-below').length) return;
    $('.js-price-below .js-open-drop.is-open').trigger('click');
  });
})();
