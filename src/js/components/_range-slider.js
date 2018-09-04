var noUiSlider = require('nouislider');
var wNumb = require('wnumb');

var sliders = document.querySelectorAll('.js-range-slider');

function initRange(slider) {
  var minSlider = parseInt(slider.dataset['rangeMin']);
  var maxSlider = parseInt(slider.dataset['rangeMax']);
  var startSlider = parseInt(slider.dataset['rangeStart']);
  var endSlider = parseInt(slider.dataset['rangeEnd']);

  noUiSlider.create(slider, {
    start: [startSlider, maxSlider],

    connect: true,
    range: {
      min: minSlider,
      max: maxSlider
    },
    format: wNumb({ decimals: 0, suffix: ' ₽' })
  });
}

if (sliders) {

  sliders.forEach(slider => initRange(slider));

  sliders.forEach(slider =>
    slider.noUiSlider.on('update.one', function(e) {
      $('.js-range-min').val(e[0]);
      $('.js-range-max').val(e[1]);
    })
  );
}

$('.dropdown-menu').on('click', function(e) {
  if ($(this).hasClass('dropdown-menu-range')) {
    e.stopPropagation();
  }
});
