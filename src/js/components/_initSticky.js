import '../lib/sticky-sidebar.js';

$(document).ready(function() {

  const sticky = document.querySelector('.js-sticky-element');

  if (sticky) {
    var sidebar = new StickySidebar(sticky, {
      containerSelector: '.js-sticky-container',
      innerWrapperSelector: '.sidebar',
      topSpacing: 20,
      bottomSpacing: 40
    });
  }
});
