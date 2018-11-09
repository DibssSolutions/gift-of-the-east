import validate from '../lib/jquery.form-validator.js';
import '../lib/toggleDisabled.js';
import '../lib/date.js';
import '../lib/location.js';
import '../lib/security.js';
import Inputmask from 'inputmask';
import { BODY } from '../constants';

$('[data-inputmask]').each((i, el) => {
  Inputmask().mask(el);
});

const number = $('.js-input-number');
number.each((i, el) => {
  el.onkeyup = function(evt) {
    evt = evt || window.event;
    let that = $(this);
    that.val().match(/^\d{1}$/) ? that.next('input').focus() : that.val('');
  };
});

$(document).ready(function() {
  const form = 'form';
  var myLanguage = {
    notConfirmed: 'Введенные значения не совпадают',
    lengthTooShortStart: 'Введенное значение короче ',
    lengthBadEnd: ' символов'
  };
  // if ($(form).length) {
  $(form).each((index, el) => {
    $.validate({
      form: $(el),
      language: myLanguage,
      modules: 'date, security, location',
      disabledFormFilter: form,
      showErrorDialogs: false,
      onModulesLoaded: function(form) {
        var optionalConfig = {
          fontSize: '12pt',
          padding: '4px',
          bad: 'Очень легкий пароль. Нужно ввести более сложный.',
          weak: 'Легкий пароль. Рекомендуем повысить сложность',
          good: 'Пароль средней сложности',
          strong: 'Пароль высокой сложности'
        };
        $('input[name*="password"]').displayPasswordStrength(optionalConfig);
      }
    });
  });
});
