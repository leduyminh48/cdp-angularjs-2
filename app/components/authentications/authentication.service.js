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
  const $state  = $injector.get('$state');
  const loginUrl = '/api/login';

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
        $window.localStorage.setItem('currentUser', angular.toJson(res.data.userInfo));
        $window.localStorage.setItem('sessionHashKey', res.data.hashKey);
        $window.localStorage.setItem('login', userName);
        $state.go('main.videos.list');
      });
    },

    logout() {
      $window.localStorage.removeItem('currentUser');
      $window.localStorage.removeItem('sessionHashKey');
      $state.go('main.login');
    },

    getCurrentUser() {
      const userInfo = $window.localStorage.getItem('currentUser');

      return angular.fromJson(userInfo);
    }
  };
};
