import angular from 'angular';
import angularUiBootstrap from 'angular-ui-bootstrap';

import modalsService from './modals.service';
import './modals.less';

/**
 * @ngdocs overview
 * @name osmModals
 *
 * @description
 * Module for modals
 */
export default angular.module('modals', [
  angularUiBootstrap
])
  .factory('modalsFct', modalsService)
  .name;
