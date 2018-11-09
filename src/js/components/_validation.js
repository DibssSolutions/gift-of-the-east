import validate from '../lib/jquery.form-validator.js';
import '../lib/toggleDisabled.js';
import '../lib/date.js';
import '../lib/location.js';
import '../lib/security.js';
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
    form: form,
    modules: 'date, security, location',
    disabledFormFilter: form,
    showErrorDialogs: false,
    onModulesLoaded: function($form) {
      var optionalConfig = {
        fontSize: '12pt',
        padding: '4px',
        bad: 'Very bad',
        weak: 'слабый пароль',
        good: 'Good',
        strong: 'Strong'
      };

      $('input[name="111111111111"]').displayPasswordStrength($form, optionalConfig);
      console.log(strengthDisplay);
    }
  });
};

// const formMessage = 'js-form-message';
// if ($(formMessage).length) {
//   $.validate({
//     modules : 'toggleDisabled',
//     disabledFormFilter : formMessage,
//     showErrorDialogs : true
//   });
//   console.log($(formMessage));
// };
