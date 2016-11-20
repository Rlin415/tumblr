require('../css/main.css');

angular.module('tumblr', [
  'tumblr.post',
  'ngSanitize'
])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'https://api.tumblr.com/**' // add url as a trusted resource so we can make jsonp requests to it
    ]);
  });

require('./post/post.module.js');
require('./post/post.service.js');
require('./post/post.controller.js');