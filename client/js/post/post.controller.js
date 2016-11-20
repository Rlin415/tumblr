class PostController {
  
  constructor(PostService, $sce) {
    this.PostService = PostService;
    this.favorites = [];
    this.$sce = $sce;
  }

  addPost(post) {
    this.favorites.push(post);
  }

  removePost(index) {
    this.favorites.splice(index, 1);
  }

  getPosts(name, tag) {
    name && tag ? this.getPostsWithNameTag(name, tag) : name ? this.getPostsWithName(name) : this.getPostsWithoutName(tag);
  }

  getPostsWithNameTag(name, tag) {
    this.PostService.getPostsWithNameTag(name + '.tumblr.com', tag)
      .then((posts) => this.posts = posts)
      .catch((err) => alert('Nothing found!'));
  }

  getPostsWithName(name) {
    this.PostService.getPostsWithName(name + '.tumblr.com')
      .then((posts) => this.posts = posts)
      .catch((err) => alert('Nothing found!'));
  }

  getPostsWithoutName(tag) {
    this.PostService.getPostsWithoutName(tag)
      .then((posts) => this.posts = posts)
      .catch((err) => alert('Nothing found!'));
  }

}

angular.module('tumblr.post')
  .controller('PostController', PostController);