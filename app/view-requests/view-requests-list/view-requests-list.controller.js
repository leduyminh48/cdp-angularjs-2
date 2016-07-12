import RouterReusableCtrl from 'components/router/router-reusable.controller';

export default class extends RouterReusableCtrl {
  /*@ngInject*/
  /**
   * @ngdoc controller
   * @name osmViewRequestsList.ViewRequestsListCtrl
   * @class
   *
   * @description Controller for view list of requests
   */
  constructor($injector, $scope) {
    super($injector, $scope);

    this.VideosFct = $injector.get('VideosFct');
    this.$log      = $injector.get('$log');

    this.$routerOnActivate();
  }


  /**
   * @ngdoc method
   * @methodOf osmViewRequestsList.ViewRequestsListCtrl
   * @name osmViewRequestsList.ViewRequestsListCtrl#$routerOnReuse
   *
   * @description Life cycle hook of the router
   */
  $routerOnReuse() {
    this.loadData();
  }


  /**
   * @ngdoc method
   * @methodOf osmViewRequestsList.ViewRequestsListCtrl
   * @name osmViewRequestsList.ViewRequestsListCtrl#$routerOnActivate
   *
   * @description Life cycle hook of the router
   */
  $routerOnActivate() {
    this.$log.log(this.$state.params);
    this.loadData();
  }

  loadData() {
    this.VideosFct.query().$promise.then(data => {
      this.data = data;
  })
  }

  goToDetails(id) {
    this.$state.go('^.details', { id });
  }

  remove(id) {
    this.VideosFct.delete({ id }).$promise.then(() => {
      this.loadData();
  })
  }
}
