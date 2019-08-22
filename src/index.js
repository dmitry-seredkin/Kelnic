
import './style.scss';
import listenMenuClick from './common.blocks/header/header';
import listenScroll from './common.blocks/up-button/up-button';
import listenClick from './common.blocks/apartments/apartments';

function beginWork() {
  listenMenuClick();
  listenScroll();
  listenClick();
}

beginWork();
