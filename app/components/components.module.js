import angular from 'angular';
import 'angular-sanitize';

import './styles';

import controls           from './controls';
import authentications    from './authentications';
import router             from './router';
import customBootstrap    from './custom-bootstrap';
import customToastr       from './custom-toastr';
import modals             from './modals';
import serverInteraction  from './server-interaction';
import models             from './models';
import filters            from './filters';
import layouts            from './layouts';
import logout             from './logout';
import durationFilter     from './duration';
import serverMock         from './server-mock';

export default angular.module('osmComponents', [
  'ngSanitize',
  router,
  serverMock,

  filters,
  authentications,
  customBootstrap,
  customToastr,
  serverInteraction,
  models,

  controls,
  modals,
  layouts,
  logout,
  durationFilter
])
  .name;
