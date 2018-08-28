import validate from 'jquery-form-validator';
import 'jquery-form-validator/form-validator/toggleDisabled.js';
import Inputmask from 'inputmask';
import { BODY } from '../constants'; 

BODY.on('focus', 'input', function() {
  Inputmask().mask(this);
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
