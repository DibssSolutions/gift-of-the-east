import 'sticky-sidebar';

$(document).ready(function() {

  const sticky = document.querySelector('.js-sticky-element');

  if (sticky) {
    var sidebar = new StickySidebar(sticky, {
      containerSelector: '.js-sticky-container',
      innerWrapperSelector: '.sidebar',
      topSpacing: 40,
      bottomSpacing: 40
    });
  }
});
