import { SHOW } from './../constants';

const btn = $('.js-password-show');
btn.on('click', function() {
  const that = $(this);
  const parent = that.parents('.js-form-control');
  const input = parent.find('input');
  if (!parent.hasClass(SHOW)) {
    parent.addClass(SHOW);
    input.attr('type', 'text');
  }
  else {
    input.attr('type', 'password');
  	parent.removeClass(SHOW);
  }
});
