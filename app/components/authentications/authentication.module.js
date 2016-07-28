import angular from 'angular';

import models from '../models';

import AuthenticationFct from './authentication.service';

/**
 * @ngdoc module
 * @name osmAuthentication
 *
 * @description Module for authentications services
 */
export default angular.module('osmAuthentication', [ //eslint-disable-line angular/file-name
  models
])
  .factory('authenticationFct', AuthenticationFct)
  .name;
