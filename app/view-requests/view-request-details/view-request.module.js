import angular    from 'angular';
import components from 'components';

import viewComponent       from './view-request.component';
import  './view-request.less';

/**
 * @ngdocs overview
 * @name osmViewRequest
 *
 * @description
 * Module request view
 */
export default angular.module('osmViewRequest', [ //eslint-disable-line angular/file-name
  components
])

  .config(/*@ngInject*/$stateProvider => {
    $stateProvider
      .state('main.videos.details', viewComponent);
  })
  .name;
