import angular   from 'angular';

import loginComponent from './view-login.component';


/**
 * @ngdoc overview
 * @name cdpViewLogin
 *
 * @description
 * Hold component for generating login page
 */
export default angular.module('cdpViewLogin', [])
  .config(/*@ngInject*/$stateProvider => {
    $stateProvider
      .state('login', loginComponent);
  })
  .name;
