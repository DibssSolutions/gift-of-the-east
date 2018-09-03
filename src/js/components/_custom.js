// add class btn
(function($) {
  var tab = $('.js-tab');

  tab.on('click', function() {
    $(this).addClass('is-active').siblings().removeClass('is-active');
  });
})(jQuery);


// change text btn
$(document).ready(function() {
  $('.js-change-text').click(function() {
    $(this).text('Закрыт');                   
  });
});
