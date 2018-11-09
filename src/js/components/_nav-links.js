import { BODY, SHOW, INIT, OPEN, ACTIVE } from '../constants';
const trigger = $('.js-nav-links-current');
const navLinks = $('.js-nav-links');
const parentLink = $('.js-nav-parent-dark');
const darkWrapper = $('.js-nav-wrap-dark');

const triggers = $('[data-dd-trigger]');

triggers.each((i, trigger) => {
  trigger = $(trigger);
  const parent = trigger.parents('[data-dd-wrapper]');
  const close = parent.find('[data-dd-close]');
  const overlay = parent.find('.js-search-overlay');
  const input = parent.find('.js-search-input');
  trigger.on('click', function() {
    if (parent.hasClass(OPEN)) {
      parent.removeClass(OPEN);
    } else {
      parent.addClass(OPEN);
      setTimeout(() => {
        input.focus();
      }, 300);
      console.log(input);
    }
  });

  const hide = () => parent.removeClass(OPEN);

  BODY.on('click', e => {
    if ($(e.target).closest(close).length || $(e.target).closest(parent).length)
      return;
    parent.removeClass(OPEN);
    if ($('.js-open-mob-search').hasClass(OPEN)) {
      $('.js-open-mob-search').removeClass(OPEN);
    }
  });

  close.on('click', e => {
    e.preventDefault();
    hide();
  });

  overlay.on('click', e => {
    hide();
    if ($('.js-open-mob-search').hasClass(OPEN)) {
      $('.js-open-mob-search').removeClass(OPEN);
    }
  });
});

trigger.on('click', function() {
  const parent = $(this).parents('.js-nav-links');
  if (parent.hasClass(SHOW)) {
    parent.removeClass(SHOW);
  } else {
    navLinks.removeClass(SHOW);
    parent.addClass(SHOW);
  }
});

BODY.on('click', e => {
  if ($(e.target).closest('.js-nav-links').length) return;
  navLinks.removeClass(SHOW);
});

darkWrapper.hover(function() {
  $(darkWrapper)
    .closest(parentLink)
    .toggleClass(INIT);
});
