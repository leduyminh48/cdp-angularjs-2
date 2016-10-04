/**
 * @ngdoc overview
 * @name osmServerUnpack
 * @description
 *
 * Module for unpack interceptor
 */
export default angular.module('osmServerUnpack', [])  //eslint-disable-line angular/file-name
  .config(/*@ngInject*/$httpProvider => {
    $httpProvider.interceptors.push('unpackInterceptorFct');
  })
  .factory('unpackInterceptorFct', unpackInterceptorFactory)
  .name;

/**
 * @ngdocs service
 * @name osmServerUnpack.unpackInterceptorFactory
 */
/*@ngInject*/
function unpackInterceptorFactory($injector, $q, $window, toastr) {
  return {
    request(config) {
      //Try to imitate SESSION_VARIABLE
      const userSession = $window.localStorage.getItem('sessionHashKey');

      if (config.url.indexOf('login') !== -1 || config.url.indexOf('html') !== -1) {
        return config;
      } else if (!userSession) {
        //Please suggest another method for goToLogin here as we cannot inject $state here
        $window.location.href = '/app/login';
      }

      return config;
    },

    response(response) {
      const errorMessage = $injector.get('errorMessageFct');

      if (response.data.error) {
        toastr.error(errorMessage('ERR_SERVER', {
          text: response.data.error.message || response.data.error
        }));

        return $q.reject(response.data.error.message || response.data.error);
      }

      if (response.data.hasOwnProperty('data')) {
        response.data = response.data.data;

        return response;
      }

      return response;
    }
  };
}
