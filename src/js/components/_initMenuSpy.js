var MenuSpy = require('menuspy');

var elm = document.querySelector('.js-menu-spy');
var ms = new MenuSpy(elm, {
  activeClass: 'current-item'
});

