import angular from 'angular';
/**
 * @ngdoc service
 * @name osmEmployees.EmployeesFct
 *
 * @description Returns Employee model
 *
 */

export default class ServerVideos {
  constructor(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  findOne(id) {
    return this.data.find(el = > el.id === +id
  )
  };

  findIndexOne(id) {
    return this.data.findIndex(el = > el.id === +id
  )
  };

  findAll(option) {
    const key = Object.keys(option)[0];

    return this.data.filter(video = > video[key].indexOf(option[key])
  )
  };

  newId() {
    const ids = this.data.map(video = > video.id
  )
    return Math.max(...ids) + 1;
  };;

  addOne(options) {
    const newVideo = Object.assign(angular.fromJson(options), {
      id: this.newId()
    });

    if (!newVideo.authors) {
      Object.assign(newVideo, {
        authors: []
      });
    }
    this.data.push(newVideo);

    return newVideo;
  }

  updateOne(id, options) {
    const video = this.findOne(id);

    return Object.assign(video, angular.fromJson(options));
  }

  deleteOne(id) {
    const videoIdx = this.findIndexOne(id);

    this.data.splice(videoIdx, 1);

    return videoIdx === -1 ? false : videoIdx;
  }
}

