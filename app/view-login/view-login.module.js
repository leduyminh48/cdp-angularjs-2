import angular   from 'angular';

import loginComponent from './view-login.component';
import components from '../components';


/**
 * @ngdoc overview
 * @name cdpViewLogin
 *
 * @description
 * Hold component for generating login page
 */
export default angular.module('cdpViewLogin', [
  components
])
  .config(/*@ngInject*/$stateProvider => {
    $stateProvider
      .state('main.login', loginComponent);
  })
  .name;
