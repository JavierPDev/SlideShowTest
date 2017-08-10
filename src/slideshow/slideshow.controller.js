const API_URL = 'https://apimaster-new-feature.sparkhire.com/v1.0/companies/e9aafdd9-d9f3-455e-b495-58d087415857/photos';

export default class SlideshowController {
  constructor($http) {
    'ngInject';
    this._$http = $http;
  }

  $onInit() {
    this._$http.get(API_URL)
      .then(res => this.slides = res.data, err => this.err = err);
  }
}
