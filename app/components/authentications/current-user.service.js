/**
 * @ngdoc service
 * @name osmAuthentication#currentUserFct
 *
 * @class
 * @description Singleton - creates instance of CurrentUser and returns it
 */
export default /*@ngInject*/$injector => {
  /**
   * @ngdoc service
   * @name CurrentUser
   *
   * @class
   * @description Provides methods to access current user info. Is created by osmAuthentication#currentUserFct
   */
  class CurrentUser {
    constructor() {
      this.Employees = $injector.get('EmployeesFct');
      this.Places    = $injector.get('PlacesFct');
      this.$q        = $injector.get('$q');
    }


    /**
     * @ngdoc method
     * @methodOf CurrentUser
     * @name CurrentUser#init
     *
     * @returns {Promise}
     *
     * @description Init user info and returns promise for it loading
     */
    init() {
      if (this.info && this.place) {
        return this.loading;
      }

      this.info  = this.Employees.getCurrent();
      this.place = this.Places.getCurrent();

      this.loading = this.$q.all([
        this.info.$promise,
        this.place.$promise
      ]).then(() => this);

      return this.loading;
    }


    /**
     * @ngdoc method
     * @methodOf CurrentUser
     * @name CurrentUser#isLoggedIn
     *
     * @returns {boolean} True if logged in
     *
     * @description Returns whether uer is logged in
     */
    isLoggedIn() {
      return !!this.info.fullName;
    }


    /**
     * @ngdoc method
     * @methodOf CurrentUser
     * @name CurrentUser#
     *
     * @returns {string} User name
     *
     * @description Returns user name
     */
    getFullName() {
      return this.info.fullName;
    }


    /**
     * @ngdoc method
     * @methodOf CurrentUser
     * @name CurrentUser#getUnitName
     *
     * @returns {string} Unit name
     *
     * @description Returns unit name of currently logged in user
     */
    getUnitName() {
      return this.info.unit;
    }


    /**
     * @ngdoc method
     * @methodOf CurrentUser
     * @name CurrentUser#getAvatarUrl
     *
     * @returns {string} Url to an avatar image
     *
     * @description Returns avatar url of currently logged in user
     */
    getAvatarUrl() {
      return this.info.pictureName;
    }


    /**
     * @ngdoc method
     * @methodOf CurrentUser
     * @name CurrentUser#getEmployee
     *
     * @returns {Employee} DTO of the current user
     *
     * @description Returns Employee DTO of currently logged in user
     */
    getEmployee() {
      return this.info;
    }


    /**
     * @ngdoc method
     * @methodOf CurrentUser
     * @name CurrentUser#getPlace
     *
     * @returns
     *
     * @description
     */
    getPlace() {
      return this.place;
    }

    /**
     * @ngdoc method
     * @methodOf CurrentUser
     * @name CurrentUser#getFloor
     *
     * @returns
     *
     * @description
     */
    getStrFloor() {
      return this.place.getPathItemString('FLOOR');
    }

    /**
     * @ngdoc method
     * @methodOf CurrentUser
     * @name CurrentUser#getArea
     *
     * @returns
     *
     * @description
     */
    getStrArea() {
      return this.place.getPathItemString('AREA');
    }
  }

  return new CurrentUser();
};
