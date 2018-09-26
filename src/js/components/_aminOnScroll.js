import { WIN, ANIMATE } from '../constants';

export default (function() {

  const containers = $('[data-stagger-show]');
  let array = [];
  containers.each((id,el) => {
    const item = $(el);
  	const show = () => {
  	  if (item.offset().top + item.outerHeight()/4 <= WIN.scrollTop() + WIN.outerHeight()) {
  	    WIN.off('scroll', show);
        if ( !item.hasClass(ANIMATE) ) array.push(item);
        if ( array.length - 1 === 0 ) return;
        for ( let i = 0; i <= array.length - 1; i++ ) {
          setTimeout(() => {
            $(array[i]).addClass(ANIMATE);
            if ( i === array.length-1 ) array.splice(0, array.length);
          }, i*60);
        }
  	  }
  	};
    show();
    WIN.on('scroll', show);
  });

})();
