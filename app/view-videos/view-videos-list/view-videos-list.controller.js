import RouterReusableCtrl from 'components/router/router-reusable.controller';

export default class extends RouterReusableCtrl {
  /*@ngInject*/
  constructor($injector, $scope) {
    super($injector, $scope);

    this.VideosFct         = $injector.get('VideosFct');
    this.$log              = $injector.get('$log');
    this.authenticationFct = $injector.get('authenticationFct');
    this.modalsFct         = $injector.get('modalsFct');

    this.$routerOnActivate();
  }

  $routerOnReuse() {
    this.loadData();
  }


  $routerOnActivate() {
    this.$log.log(this.$state.params);
    this.loadData();
  }

  loadData() {
    this.VideosFct.query().$promise.then(data => {
      this.data = data;
    });
  }

  goToDetails(id) {
    this.$state.go('^.details', { id });
  }

  remove(id) {
    this.modalsFct.confirm({
      onSubmit: () => {
        this.VideosFct.delete({ id }).$promise.then(() => {
          this.loadData();
        });
      }
    });
  }
}
