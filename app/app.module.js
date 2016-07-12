import angular          from 'angular';
import componentsModule from './components';
import viewMain         from './view-main';
import viewRequests     from './view-requests';

angular.module('osmApp', [
  'ngMockE2E',
  componentsModule,
  viewMain,
  viewRequests
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
