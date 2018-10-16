import { MENU_OPEN, OPEN } from '../constants';

const navItem = $('.js-nav-item');
const hasList = 'has-list';
navItem.each((i, el) => {
  const that = $(el);
  const navWrap = that.find('.js-nav-item');
  if (navWrap.length) that.addClass(hasList);
});

const openMenuBtn = $('.js-open-mob-menu');
const closeMenuBtn = $('.js-close-mob-menu');
const secondaryToggler = $('.js-submenu-toggler');
const menu = $('.js-menu');

openMenuBtn.click(function(e) {
  $(menu).addClass(MENU_OPEN);
});

closeMenuBtn.click(function(e) {
  $(menu).removeClass(MENU_OPEN);
  $('.js-nav-item').each((index, el) => {
    if ($(el).hasClass(OPEN)) {
      $(el).removeClass(OPEN);
    }
    console.log(2333);
  });
});

secondaryToggler.click(function(e) {
  const subMenuParent = $(this).parents('.js-nav-item');
  $(subMenuParent).toggleClass(OPEN);
});
