import angular    from 'angular';

import serverMockFct         from './server-mock.service';
import serverVideo           from './server-video-model';
import serverAuthentication  from './server-authentication-model';

/**
 * @ngdoc overview
 * @name serverMock
 * @description
 *
 * Fake server behaviours
 */

export default angular.module('serverMock', [
  serverVideo,
  serverAuthentication
])
  .factory('serverMockFct', serverMockFct)
  .name;
