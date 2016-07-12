import RouterReusableCtrl from 'components/router/router-reusable.controller';

export default class ViewRequestCtrl extends RouterReusableCtrl {
  /*@ngInject*/
  constructor($injector, $scope, toastr) {
    super($injector, $scope);
    this.VideosFct = $injector.get('VideosFct');
    this.toastr    = toastr;

    this.$routerOnActivate();
  }

  $routerOnActivate() {
    const id = this.$state.params.id;

    if (id === 'new') {
      this.isNew = true;
      this.video = this.VideosFct.create({});
    } else {
      this.isNew = false;
      this.VideosFct.get({ id }).$promise.then(video => {
        video.createDate = new Date(video.createDate);
        this.video = video;
      });
    }
  }

  cancelEditing() {
    this.$state.go('^.list');
  }

  onSubmit() {
    if (this.isNew) {
      this.VideosFct.save({}, this.video).$promise.then(data => {
        this.toastr.success(`"${ data.title }" with new id ${ data.id }`, 'Successfully added new video');
      });
    } else {
      this.VideosFct.update({ id: this.video.id }, this.video).$promise.then(() => {
        this.toastr.success(this.video.title, 'Successfully updated video');
      });
    }
  }
}
