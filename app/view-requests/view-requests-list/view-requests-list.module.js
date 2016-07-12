import angular    from 'angular';
import components from 'components';
import 'angular-ui-grid/ui-grid.min';

import viewComponent       from './view-requests-list.component';
import requestModule       from '../view-request-details';
import viewRequestListFct  from './view-request-list.service';

import './view-requests-list.less';

/**
 * @ngdocs overview
 * @name osmViewRequestsList
 *
 * @description
 * Module requests list view
 */
export default angular.module('osmViewRequestsList', [ //eslint-disable-line angular/file-name
  components,
  requestModule
])

  .config(/*@ngInject*/$stateProvider => {
    $stateProvider
      .state('main.videos.list', viewComponent);
  })

  .factory('viewRequestListFct', viewRequestListFct)
  .name;
