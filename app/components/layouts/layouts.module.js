import angular from 'angular';
import router  from '../router';

import './layouts.less';

import headerComponent from './header/header-layout.component';
import footerComponent from './footer/footer-layout.component';


/**
 * @ngdocs overview
 * @name osmLayouts
 *
 * @description
 * Module for layout components like header or footer
 */
export default angular.module('osmLayouts', [
  router
])

  .component('osmHeader', headerComponent)
  .component('osmFooter', footerComponent)
  .name;
