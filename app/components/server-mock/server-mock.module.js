import angular    from 'angular';

import serverMockFct  from './server-mock.service';
import serverVideosFct  from './server-video-model/server-video-model.module';

/**
 * @ngdoc overview
 * @name serverMock
 * @description
 *
 * Fake server behaviours
 */

export default angular.module('serverMock', [
  serverVideosFct
])
  .factory('serverMockFct', serverMockFct)
  .name;
