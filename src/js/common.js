import './components';
import 'bootstrap/js/dist/dropdown';
import 'popper.js';
import { BODY, NO_TOUCH } from './constants';
import { isTouch } from './utils';

if (!isTouch()) BODY.addClass(NO_TOUCH);
