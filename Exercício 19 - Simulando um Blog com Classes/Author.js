const Post = require("./Post");

class Author {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }

  addPosts(name) {
    const post = new Post(this, name);
    this.posts.push(post);

    return post;
  }
}

module.exports = Author;
