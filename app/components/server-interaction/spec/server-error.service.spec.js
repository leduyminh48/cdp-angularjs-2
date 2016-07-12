/* eslint max-statements: 0, angular/file-name: 0, max-nested-callbacks: 0 */
import angular      from 'angular';
import serverModule from '../server-interaction.module';

describe('Factory: interceptor errorInterceptorFct', () => {
  let errorInterceptorFct;
  let $httpProviderIt;
  let $rootScope;
  const $state = { current: {} };
  const toastr = {
    error: jasmine.createSpy('error')
  };

  const errorMessageFct = jasmine.createSpy('errorMessageFct').and.returnValue('Alarm!');
  const routerFct       = {
    exit: jasmine.createSpy('exit')
  };

  beforeEach(angular.mock.module(serverModule, ($httpProvider, $provide) => {
    $provide.constant('toastr', toastr);
    $provide.constant('errorMessageFct', errorMessageFct);
    $provide.constant('routerFct', routerFct);
    $provide.constant('redirectPortHeaderConst', 'redirectPortHeaderConst');
    $provide.constant('redirectPathHeaderConst', 'redirectPathHeaderConst');
    $provide.constant('routerStatusFct', {
      isLocalRun() {
        return false;
      }
    });
    $provide.constant('$state', $state);
    $httpProviderIt = $httpProvider;
  }));

  beforeEach(inject((_$rootScope_, _errorInterceptorFct_) => {
    errorInterceptorFct = _errorInterceptorFct_;
    $rootScope          = _$rootScope_;
  }));

  afterEach(() => {
    routerFct.exit.calls.reset();
    toastr.error.calls.reset();
    errorMessageFct.calls.reset();
  });


  const testStatus = (config, errorCode, translationParams, goLogin, title) => {
    let result;

    beforeEach(() => {
      result = errorInterceptorFct.responseError(config);
    });


    if (translationParams) {
      it('should call translation filter with params', () => {
        expect(errorMessageFct).toHaveBeenCalledWith(errorCode, translationParams);
      });
    } else {
      it('should call translation filter', () => {
        expect(errorMessageFct).toHaveBeenCalledWith(errorCode);
      });
    }

    if (goLogin) {
      it('should jump to login page', () => {
        const param = angular.isObject(goLogin) && goLogin || null;

        expect(routerFct.exit).toHaveBeenCalledWith(param);
      });
    } else {
      it('should not jump to login page', () => {
        expect(routerFct.exit).not.toHaveBeenCalled();
      });
    }

    if (title) {
      it('should show toastr title', () => {
        expect(toastr.error).toHaveBeenCalledWith('Alarm!', title);
      });
    } else {
      it('should show toastr error with the result of it', () => {
        expect(toastr.error).toHaveBeenCalledWith('Alarm!');
      });
    }

    it('should return rejected promise', done => {
      result.catch(error => {
        expect(error).toEqual({ status: config.status });
        done();
      });

      $rootScope.$apply();
    });
  };

  describe('-1 status', () => {
    let result;

    beforeEach(() => {
      result = errorInterceptorFct.responseError({ status: -1 });
    });

    it('should return rejected promise', done => {
      result.catch(error => {
        expect(error).toEqual('Request was cancelled');
        done();
      });

      $rootScope.$apply();
    });

    it('should not call translate', () => {
      expect(errorMessageFct).not.toHaveBeenCalled();
    });

    it('should not call toastr.error', () => {
      expect(toastr.error).not.toHaveBeenCalled();
    });

    it('should not jump to login page', () => {
      expect(routerFct.exit).not.toHaveBeenCalled();
    });
  });


  describe('400 error during login', () => {
    testStatus({ status: 400 }, 'ERR_VALIDATION');
  });


  describe('401 error with headers', () => {
    testStatus({ status: 401, headers: name => name }, 'ERR_AUTHENTICATION', null, {
      port: 'redirectPortHeaderConst',
      path: 'redirectPathHeaderConst'
    });
  });


  describe('403 error', () => {
    testStatus({ status: 403, url: 'foo' }, 'ERR_ACCESS', { resource: 'foo' });
  });


  describe('404 error', () => {
    testStatus({ status: 404, url: 'bar' }, 'ERR_NOT_FOUND', { resource: 'bar' });
  });


  describe('500 error', () => {
    testStatus({
      status : 500,
      details: 'foo',
      summary: 'bar'
    }, 'ERR_APPLICATION', {
      details: 'foo'
    }, false, 'bar');
  });


  it('should add interceptor', () => {
    expect($httpProviderIt.interceptors).toContain('errorInterceptorFct');
  });
});
