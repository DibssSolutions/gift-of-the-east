import { BODY, SHOW, INIT, OPEN, ACTIVE } from '../constants';
const items = $('.js-breadcrumbs-item');

items.each((i, item) => {
  item = $(item);
  const link = item.find('.js-breadcrumbs-link');
  link.on('click', (e) => {
    const parent = $(e.target).parents('.js-breadcrumbs-item');
    if (parent.hasClass('has-list')) {
      e.preventDefault();
      parent.toggleClass(OPEN);
    }
  });
  BODY.on('click', e => {
    if ($(e.target).closest(item).length || $(e.target).closest(parent).length)
      return;
    item.removeClass(OPEN);
  });
});
