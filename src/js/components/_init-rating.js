import '../lib/bootstrap-rating.min.js';
import '../lib/toggleDisabled.js';

const ratings = '.js-rating';
if ($(ratings).length) {
  $('.js-rating').rating();
};
