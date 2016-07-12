import angular from 'angular';
import ngResource from 'angular-resource';
import Videos from './videos.service';

/**
 * @ngdocs overview
 * @name Videos
 *
 * @description
 * Module for videos models
 */
export default angular.module('Videos', [ //eslint-disable-line angular/file-name
  ngResource
])
  .factory('VideosFct', Videos)
  .name;
