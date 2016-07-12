import controller  from './view-requests.controller';
import templateUrl from './view-requests.tpl.html';


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
