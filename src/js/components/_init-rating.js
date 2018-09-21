import '../lib/bootstrap-rating.min.js';
import '../lib/toggleDisabled.js';

const ratings = $('.js-rating');
if (ratings.length) {
  ratings.rating();
};

const ratingsGray = $('.js-rating-full');
if (ratingsGray.length) {
  ratingsGray.rating({ empty: 'glyphicon glyphicon-star' });
};
