import { ObjectId } from 'mongodb';

class Post {
  static #database;
  static #postCollection;
  static injectDB(database) {
    this.#database = database;
    this.#postCollection = database.collection('posts');
  }
  static async getAll() {
    return this.#postCollection.find().sort({ _id: -1 }).toArray();
  }
  static async getOne(id) {
    return this.#postCollection.findOne({ _id: this.#makeObjectId(id) });
  }
  static async create(postData) {
    return await this.#postCollection.insertOne(postData);
  }
  static async update(id, postData) {
    return await this.#postCollection.updateOne(
      { _id: this.#makeObjectId(id) },
      { $set: postData },
    );
  }
  static async delete(id) {
    return await this.#postCollection.deleteOne({
      _id: this.#makeObjectId(id),
    });
  }
  static #makeObjectId(id) {
    return new ObjectId(id);
  }
}

export default Post;
