import controller  from './view-videos.controller';
import templateUrl from './view-videos.tpl.html';


/**
 * @ngdoc directive
 * @name osmViewRequests.osmViewRequests
 * @scope
 *
 * @description Component for requests view
 */
export default {
  url       : '/videos',
  'abstract': true,

  controller,
  templateUrl,
  controllerAs: 'view'
};
