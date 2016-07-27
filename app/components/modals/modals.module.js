import angular from 'angular';

import modalsService from './modals.service';

/**
 * @ngdocs overview
 * @name osmModals
 *
 * @description
 * Module for modals
 */
export default angular.module('osmModals', [])
  .factory('osmModalsFct', modalsService)
  .name;
