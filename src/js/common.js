import components from './components';
import 'bootstrap/js/dist/dropdown';
import 'popper.js';
import { DOC, BODY, NO_TOUCH, LOADED } from './constants';
import { isTouch } from './utils';

DOC.ready(components);

if (!isTouch()) BODY.addClass(NO_TOUCH);
BODY.addClass(LOADED);
