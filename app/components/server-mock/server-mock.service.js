export default /*@ngInject*/ function ($injector) {
  const $httpBackend    = $injector.get('$httpBackend');
  const ServerVideosFct = $injector.get('ServerVideosFct');

  return {
    set() {
      $httpBackend.whenGET('/api/videos').respond(() => {
        const videos = ServerVideosFct.getData();

        return [200, videos, {}];
    })
      /*eslint-disable no-undefined*/
      $httpBackend.whenGET(/\/api\/videos\/(.+)/, undefined, ['id'])
        .respond((method, url, data, header, params) => {
          const video = ServerVideosFct.findOne(params.id);

          return [200, video, {}];
    })
      $httpBackend.whenPOST('/api/videos')
        .respond((method, url, data) => {
          const video = ServerVideosFct.addOne(data);

          return [200, video, {}];
    })
      $httpBackend.whenPUT(/\/api\/videos\/(.+)/, undefined, undefined, ['id'])
        .respond((method, url, data, header, params) => {
          const video = ServerVideosFct.updateOne(params.id, data);

          return [200, video, {}];
    })
      $httpBackend.whenDELETE(/\/api\/videos\/(.+)/, undefined, ['id'])
        .respond((method, url, data, header, params) => {
          const video = ServerVideosFct.deleteOne(params.id);

          return [200, video, {}];
    })

      /*eslint-enable no-undefined*/
    }
  };
}
