/**
 * @ngdoc service
 * @name osmEmployees.EmployeesFct
 *
 * @description Returns Employee model
 *
 */

export default /*@ngInject*/$resource => {
  /**
   * @ngdoc service
   * @name Videos.VideosFct
   * @class
   * @extends $resource
   *
   * @description Model for employees
   *
   */
  const Videos = $resource('/api/videos/:id', { id: '@id' }, {

    /**
     * @ngdoc service
     * @name Videos.VideosFct
     * @class
     * @extends $resource
     *
     * @description Video model.
     */

    /**
     * @ngdoc method
     * @methodOf Videos.VideosFct
     * @name Videos.VideosFct#update
     * @restMethod GET
     *
     * @returns {$resource}
     *
     * @static
     * @description update video
     */
    update: {
      method: 'PUT'
    }
  });

  Videos.create = options => {
    const defaultParams = {};

    return Object.assign(defaultParams, options);
  };

  return Videos;
};
