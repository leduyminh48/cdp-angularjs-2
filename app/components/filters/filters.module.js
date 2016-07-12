/**
 * @ngdoc overview
 * @name osmFilters
 * @description
 *
 * Module for filters
 */
import angular from 'angular';

import acFilterMarkdown   from './markdown.filter.js';
import cdpDuration from './duration.filter.js';

export default angular.module('cdpFilter', []) //eslint-disable-line angular/file-name
  .filter('markdown', acFilterMarkdown)
  .filter('cdpDuration', cdpDuration)
  .name;
