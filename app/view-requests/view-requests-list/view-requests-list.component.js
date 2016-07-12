import controller  from './view-requests-list.controller';
import templateUrl from './view-requests-list.tpl.html';


/**
 * @ngdoc directive
 * @name osmViewRequestsList.osmViewRequestsList
 * @scope
 *
 * @description Component for requests list view
 */
export default {
  url: '/list',
  reloadOnSearch: true,

  controller,
  templateUrl,
  controllerAs: 'view'
};
