import angular      from 'angular';
import ngResource   from 'angular-resource';
import ServerAuthenticationFct from './server-authentication-model.service';
import ServerUsersData from './server-authentication-model.const';

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
  .constant('ServerUsersDataConst', ServerUsersData)
  .factory('ServerAuthenticationFct', /*@ngInject*/ServerUsersDataConst =>
    new ServerAuthenticationFct(ServerUsersDataConst))
  .name;

