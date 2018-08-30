import { OPEN, ACTIVE, widthMD, widthSM, WIN } from '../constants';

;(function() {

  const drop = $('.js-drop');
  const btn = $('.js-open-drop');
  const dropWrapHeights = [];
	
  // add btn-text
  btn.each((i,el) => {
    const _this = $(el);
    const btnText = _this.find('.js-drop-btn-text');
    const textOpen = _this.data('text-open');
    btnText.text(textOpen);
  });

  btn.on('click', function(e) {
    e.preventDefault();
    const _this = $(this);
    const thisDrop = _this.parents('.js-drop');
    const hiddenBlock = thisDrop.find('.js-drop-hidden');
    const textOpen = _this.data('text-open');
    const textClose = _this.data('text-close');
    const btnTextWrap = _this.find('.js-drop-btn-text');
    const duration = 400;
			
    if (!_this.hasClass(OPEN)) {
      _this.addClass(OPEN);
      btnTextWrap.text(textClose);
      hiddenBlock.slideDown(duration);
    }
    else {
      _this.removeClass(OPEN);
      btnTextWrap.text(textOpen);
      hiddenBlock.slideUp(duration);
    }
  });

})();
