import { BODY, SHOW } from '../constants';
const trigger = $('.js-nav-links-current');
const navLinks = $('.js-nav-links');

trigger.on('click', function() {
  const parent = $(this).parents('.js-nav-links');
  if (parent.hasClass(SHOW)) {
    parent.removeClass(SHOW);
  }
  else {
    navLinks.removeClass(SHOW);
    parent.addClass(SHOW);
  }
});

BODY.on('click', e => {
  if ($(e.target).closest('.js-nav-links').length) return;
  navLinks.removeClass(SHOW);
});
