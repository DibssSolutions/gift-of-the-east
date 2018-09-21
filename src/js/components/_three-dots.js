(function($) {
  var truncate = function(el) {
    var text = el.text(),
      height = el.height(),
      width = el.width(),
      clone = el.clone();
	  clone.css({
      position: 'absolute',
      visibility: 'hidden',
      height: 'auto',
      width: width,
      'max-height': 'none'
    });
    el.after(clone);
    var l = text.length - 1;
    for (; l >= 0 && clone.height() > height; --l) {
      clone.text(text.substring(0, l) + '...');
    }
    el.text(clone.text());
    clone.remove();
  };

  $.fn.truncateText = function() {
    return this.each(function() {
      truncate($(this));
    });
  };
}(jQuery));

setTimeout(function() {$('.js-dots').truncateText();},0);
