class Post {
  static #database;
  static #postCollection;
  static injectDB(database) {
    this.#database = database;
    this.#postCollection = database.collection('posts');
  }
}

export default Post;
