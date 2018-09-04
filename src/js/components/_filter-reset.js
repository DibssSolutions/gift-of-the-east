import './_range-slider';

$('.js-filter-reset').click(e => {
  var selects = $('.js-main-filter').find('.js-select');
  $(selects).selectpicker('deselectAll');

  var checkboxes = $('.js-main-filter').find($(':checkbox'));
  $(checkboxes).prop('checked', false);

  var sliders = document.querySelectorAll('.js-range-slider');
  sliders.forEach(slider => slider.noUiSlider.reset());
});

$('.js-range-reset').click(function(e) {
  var container = this.closest('.js-range-container');
  var slider = container.querySelector('.js-range-slider');
  slider.noUiSlider.reset();
});

$('.js-reset-calc-form').click(e => {
  var radio = $('.js-calc-form').find($(':radio'));
  $(radio).prop('checked', false);
  var inputs = $('.js-calc-form').find($(':input'));
  $(inputs).val('');
});
