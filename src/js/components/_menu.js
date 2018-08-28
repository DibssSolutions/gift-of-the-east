const navItem = $('.js-nav-item');
const hasList = 'has-list';
navItem.each((i,el) => {
  const that = $(el);
  const navWrap = that.find('.js-nav-wrap');
  if (navWrap.length) that.addClass(hasList);
});
