import angular from 'angular';
/**
 * @ngdoc service
 * @name osmAuthentication#authenticationFct
 *
 * @class
 * @description service for authentication action
 */
export default /*@ngInject*/$injector => {
  const $http    = $injector.get('$http');
  const $window  = $injector.get('$window');
  const loginUrl = '/login';

  return {
    login(userName, password) {
      return $http({
        method: 'POST',
        url   : loginUrl,
        data  : {
          userName,
          password
        }
      }).then(res => {
        $window.localStorage.setItem('currentUser', angular.toJson(res.userInfo));
        $window.localStorage.setItem('sessionHashKey', res.hashKey);
      });
    },

    logout() {
      $window.localStorage.removeItem('currentUser');
      $window.localStorage.removeItem('sessionHashKey');
    },

    getCurrentUser() {
      const userInfo = $window.localStorage.getItem('currentUser');

      return angular.fromJson(userInfo);
    }
  };
};
