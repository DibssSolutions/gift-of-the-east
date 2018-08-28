import './components';
import { BODY, NO_TOUCH } from './constants';
import { isTouch } from './utils';

if (!isTouch()) BODY.addClass(NO_TOUCH);
