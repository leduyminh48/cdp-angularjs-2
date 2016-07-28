import templateUrl from './view-login.tpl.html';

class MainCtrl {
  /*@ngInject*/
  constructor($injector) {
    this.authenticationFct = $injector.get('authenticationFct');
  }

  /*@ngInject*/
  /**
   * @ngdoc controller
   *
   * @class
   * @description
   * Controller for Main component
   */
  login() {
    this.authenticationFct.login(this.userName, this.password);
  }

  checkValidity() {

  }
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
  url    : '/login',
  resolve: {},

  templateUrl,
  controller  : MainCtrl,
  controllerAs: 'view'
};
