import { DOC, BODY } from '../constants';

DOC.ready(function() {
  setTimeout(() => {
    $('.js-loader').remove();
  }, 3000);
});
