import angular from 'angular';

import viewComponent      from './view-requests.component';

import listComponent    from './view-requests-list';
import detailsComponent from './view-request-details';

import  './view-requests.less';

/**
 * @ngdocs overview
 * @name osmViewRequests
 *
 * @description
 * Module requests view
 */
export default angular.module('osmViewRequests', [
  listComponent,
  detailsComponent
])
  .config(/*@ngInject*/$stateProvider => {
    $stateProvider
      .state('main.videos', viewComponent);
  })
  .name;
