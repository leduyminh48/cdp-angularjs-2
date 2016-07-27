import templateUrl from './view-login.tpl.html';

class MainCtrl {
  /*@ngInject*/
  /**
   * @ngdoc controller
   *
   * @class
   * @description
   * Controller for Main component
   */
}


/**
 * @ngdoc directive
 * @name osmMain.osmMainLayout
 *
 * @scope
 *
 * @description
 * Component to render main layout
 */
export default {
  url       : '/login',
  resolve: {},

  templateUrl,
  controller: MainCtrl
};
