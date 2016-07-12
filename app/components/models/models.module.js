import angular         from 'angular';

import modelVideos from './videos';
/**
 * @ngdocs overview
 * @name cdpModels
 *
 * @description
 * Module for holding models
 */
export default angular.module('cdpModels', [
  modelVideos
])

  .name;
