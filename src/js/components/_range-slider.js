var noUiSlider = require('nouislider');
var wNumb = require('wnumb');

// var sliders = document.querySelectorAll('.js-range-slider');

function initRange(slider) {
  // var minSlider = parseInt(slider.dataset['rangeMin']);
  // var maxSlider = parseInt(slider.dataset['rangeMax']);
  // var startSlider = parseInt(slider.dataset['rangeStart']);
  // var endSlider = parseInt(slider.dataset['rangeEnd']);

  var minSlider = parseInt($(slider).data('range-min'));
  var maxSlider = parseInt($(slider).data('range-max'));
  var startSlider = parseInt($(slider).data('range-start'));
  var endSlider = parseInt($(slider).data('range-end'));

  noUiSlider.create(slider, {
    start: [startSlider, maxSlider],

    connect: true,
    range: {
      min: minSlider,
      max: maxSlider
    },
    format: wNumb({ decimals: 0 })
  });
}

var sliders = $('.js-range-slider');

if ($(sliders).length) {
  
  $(sliders).each((i, slider) => initRange(slider));

  $(sliders).each((i, slider) => {
    // var parent = slider.closest('.js-range-container');
    var parent = $(slider).parents('.js-range-container');
    // var min = parent.querySelector('.js-range-min');
    // var max = parent.querySelector('.js-range-max');
    var min = parent.find('.js-range-min');
    var max = parent.find('.js-range-max');

    slider.noUiSlider.on('update.one', function(e) {
      min.val(e[0]);
      max.val(e[1]);
    });

    min.on('change', function() {
      slider.noUiSlider.set([this.value, null]);
    });
    max.on('change', function() {
      slider.noUiSlider.set([null, this.value]);
    });
  });
}

$('.dropdown-menu').on('click', function(e) {
  if ($(this).hasClass('dropdown-menu-range')) {
    e.stopPropagation();
  }
});
