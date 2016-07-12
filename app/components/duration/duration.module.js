import angular from 'angular';

/**
 * @ngdocs overview
 * @name osmProgressBar
 *
 * @description
 * Module for progress bar
 */
export default angular.module('cdpDuration', [])
  /**
   * @ngdoc directive
   * @name cdpDuration.duration
   * @scope
   *
   * @description Progress bar component
   */
  .filter('cdpDuration', () => minutes => {
    if (!minutes) {
      return '';
    }
    const hours = Math.floor(minutes / 60);

    return hours ?
      `${ hours } hours ${ minutes - hours * 60 } minutes` : `${ minutes } minutes`;
  })
  .name;
