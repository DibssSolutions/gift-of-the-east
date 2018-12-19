import { OPEN, ACTIVE } from '../constants';
const triggers = $('.js-tags-trigger');
triggers.each((i, el) => {
  const trigger = $(el);
  console.log(trigger);
  const parent = trigger.parents('.js-goods-tags-wrap');
  const tags = parent.find('.js-goods-tags');
  trigger.on('click', () => {
    tags.toggleClass(OPEN);
    trigger.toggleClass(ACTIVE);
  });
});
