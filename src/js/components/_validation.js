import validate from '../lib/jquery.form-validator.js';
import '../lib/toggleDisabled.js';
import Inputmask from 'inputmask';
import { BODY } from '../constants';


$('[data-inputmask]').each((i,el) => {
  Inputmask().mask(el);
});

const number = $('.js-input-number');
number.each((i,el) => {
  el.onkeyup = function(evt) {
    evt = evt || window.event;
    let that = $(this);
    (that.val().match(/^\d{1}$/))
	  ? that.next('input').focus()
	  : that.val('');
  };	
});

const form = 'form';
if ($(form).length) {
  $.validate({
    modules : 'toggleDisabled',
    disabledFormFilter : form,
    showErrorDialogs : false
  });
};
