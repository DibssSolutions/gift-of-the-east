import { ACTIVE } from '../constants';
const radioTab = $('.js-radio-tab');

radioTab.on('click', function() {
  const btn = $(this);
  btn
    .addClass(ACTIVE)
    .siblings()
    .removeClass(ACTIVE);
});
