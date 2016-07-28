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

  authenticateLogin(userName, password) {
    const res = this.findUser(userName);

    if (res && res.password === password) {
      res.hashKey = this.generateHashKey();

      return res;
    }

    return false;
  }

  authenticateHashkey(userName, hashKey) {
    const res = this.findUser(userName);

    return res && res.hashKey === hashKey;
  }

  findUser(userName) {
    return this.data.find(user => user.userName === userName);
  }

  generateHashKey() {
    let text       = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 15; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}

