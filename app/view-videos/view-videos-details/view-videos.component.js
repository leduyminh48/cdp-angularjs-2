import controller  from './view-videos.controller';
import templateUrl from './view-videos.tpl.html';


export default {
  url       : '/details/:id',
  controller,
  templateUrl,
  controllerAs: 'view'
};
