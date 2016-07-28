import angular from 'angular';

import viewComponent      from './view-videos.component';

import listComponent    from './view-videos-list';
import detailsComponent from './view-videos-details';

import  './view-videos.less';

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
