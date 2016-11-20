const config = require('../../../config');

class PostService {
  constructor($http) {
    this.$http = $http;
    this.withNameEndpoint = "https://api.tumblr.com/v2/blog";
    this.withoutNameEndpoint = "https://api.tumblr.com/v2/tagged";
  }

  getPostsWithNameTag(name, tag) {
    return this.$http.jsonp(`${ this.withNameEndpoint }/${ name }/posts?api_key=${ config.apiKey }&tag=${ tag }&callback=JSON_CALLBACK`)
      .then(({ data }) => data.response.posts);
  }

  getPostsWithName(name) {
    return this.$http.jsonp(`${ this.withNameEndpoint }/${ name }/posts?api_key=${ config.apiKey }&callback=JSON_CALLBACK`)
      .then(({ data }) => data.response.posts);
  }

  getPostsWithoutName(tag) {
    return this.$http.jsonp(`${ this.withoutNameEndpoint }?api_key=${ config.apiKey }&tag=${ tag }&callback=JSON_CALLBACK`)
      .then(({ data }) => data.response); 
  }
}

angular.module('tumblr.post')
  .service('PostService', PostService);