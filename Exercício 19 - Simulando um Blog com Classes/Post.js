const Comment = require("./Comment");

class Post {
  constructor(author, name) {
    this.author = author;
    this.name = name;
    this.comments = [];
  }
  addComments(name, comment) {
    const cmt = new Comment(name, comment);
    const fr =
      "Username: " + cmt.username + " | Comentário: " + cmt.comment + "\n";
    this.comments.push(fr);
  }
}

module.exports = Post;
