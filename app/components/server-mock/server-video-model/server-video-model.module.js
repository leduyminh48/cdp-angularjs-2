import angular      from 'angular';
import ngResource   from 'angular-resource';
import ServerVideos from './server-video-model.service';
import ServerVideosData from './server-video-model.const';

/**
 * @ngdocs overview
 * @name osmServerVideos
 *
 * @description
 * Module for server videos models
 */
export default angular.module('osmServerVideos', [ //eslint-disable-line angular/file-name
  ngResource
])
  .constant('ServerVideosDataConst', ServerVideosData)
  .factory('ServerVideosFct', /*@ngInject*/ServerVideosDataConst =>
    new ServerVideos(ServerVideosDataConst))
  .name;

