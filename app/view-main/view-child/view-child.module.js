import angular   from 'angular';

import childComponent       from './view-child.component';

/**
 * @ngdoc overview
 * @name osmChild
 *
 * @description
 * Hold component for generating child layout
 */
export default angular.module('osmViewChild', [])
  .config(/*@ngInject*/$stateProvider => {
    $stateProvider
      .state('main.child', childComponent);
  })
  .name;
