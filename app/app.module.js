import angular          from 'angular';
import componentsModule from './components';
import viewMain         from './view-main';
import viewRequests     from './view-requests';
import viewLogin        from './view-login';

angular.module('osmApp', [
  'ngMockE2E',
  componentsModule,
  viewMain,
  viewRequests,
  viewLogin
])
  .run(/*@ngInject*/serverMockFct => {
    serverMockFct.set();
  })
  /**
   * If you need to switch debug info on - use angular.reloadWithDebugInfo()
   */
  .config(/*@ngInject*/($compileProvider, routerStatusFctProvider) => {
    $compileProvider.debugInfoEnabled(routerStatusFctProvider.isLocalRun());
  });
