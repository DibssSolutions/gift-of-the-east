import selectpicker from 'bootstrap-select';
import 'bootstrap/js/dist/dropdown';
import 'popper.js';

$(document).ready(() => {
  $('.js-select').selectpicker();
  $('.js-select').selectpicker('setStyle', 'btn', 'remove');
  $('.bs-actionsbox').selectpicker('setStyle', 'btn', 'remove');
	
});

