import { MENU_OPEN, OPEN } from '../constants';
import { buildIcon } from '../utils';

const navItem = $('.js-nav-item');
const navChid = $('.js-nav-child');
const hasList = 'has-list';
navItem.each((i, el) => {
  const that = $(el);
  const navWrap = that.find('.js-nav-item');
  if (navWrap.length) that.addClass(hasList);
  const navWrap1 = that.find('.js-nav-child');
  if (navWrap1.length) that.addClass(hasList);
});

const openMenuBtn = $('.js-open-mob-menu');
const closeMenuBtn = $('.js-close-mob-menu');
const backBtn = $('.js-mob-back');
const openSearchBtn = $('.js-open-mob-search');

const menu = $('.js-menu');
const subMenus = $('.js-nav-item');
const navLinks = $('.js-nav-link');

openMenuBtn.click(function(e) {
  $(menu).addClass(MENU_OPEN);
});

closeMenuBtn.click(function(e) {
  $(menu).removeClass(MENU_OPEN);
  setTimeout(() => {
    subMenus.each((index, el) => {
      if ($(el).hasClass(OPEN)) {
        $(el).removeClass(OPEN);
      }
    });
  }, 400);
});

navLinks.each((index, el) => {
  $(el).click(function(e) {
    var subMenu = $(el).closest('.js-nav-item');
    e.preventDefault();
    subMenu.addClass(OPEN);
  });
});

backBtn.each((index, el) => {
  $(el).click(function(e) {
    const subMenuParent = $(el).closest('.js-nav-item');
    subMenuParent.removeClass(OPEN);
    // e.stopPropagation();
    return false;
  });
});

openSearchBtn.click(e => {
  $('.search[data-dd-wrapper]').toggleClass(OPEN);
  openSearchBtn.toggleClass(OPEN);
  e.stopPropagation();
});
