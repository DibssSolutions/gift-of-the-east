import Inputmask from 'inputmask';
import './_range-slider';

var selectors = document.querySelectorAll('.js-range-input');
var minInputs = document.querySelectorAll('.js-range-min');
var maxInputs = document.querySelectorAll('.js-range-max');

var im = new Inputmask({
  alias: 'numeric',
  suffix: ' ₽',
  groupSeparator: '',
  digits: '0',
  rightAlign: false
});

im.mask(selectors);

