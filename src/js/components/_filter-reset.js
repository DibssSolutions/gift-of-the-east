import './_range-slider';
var slider = document.querySelector('.js-range-slider');

$('.js-filter-reset').click(e => {
  var selects = $('.js-main-filter').find('.js-select');
  $(selects).selectpicker('deselectAll');
  var checkboxes = $('.js-main-filter').find($(':checkbox'));
  $(checkboxes).prop('checked', false);
  slider.noUiSlider.reset();
});


$('.js-range-reset').click(e => slider.noUiSlider.reset());


$('.js-reset-calc-form').click(e => {
  var radio = $('.js-calc-form').find($(':radio'));
  $(radio).prop('checked', false);
  var inputs = $('.js-calc-form').find($(':input'));
  $(inputs).val('');
});
