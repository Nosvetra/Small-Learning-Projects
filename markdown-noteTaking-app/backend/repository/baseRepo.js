import model from "./../models/note.js";

class baseRepository {
  constructor(model) {
    this.model = model;
  }

  async createNote(data) {
    try {
      return await this.model.create(data);
    } catch (err) {
      console.error(err);
    }
  }

  async updateNote(_id, update) {
    try {
      return await this.model.findOneAndUpdate({ _id }, update, { new: true });
    } catch (err) {
      console.error(err);
    }
  }

  async getParticularArticle(id) {
    try {
      return await this.model.findById(id);
    } catch (err) {
      console.error(err);
    }
  }

  async getLimitedArticles() {
    try {
      return await this.model.find().limit(10);
    } catch (err) {
      console.error(err);
    }
  }
}

export default baseRepository;
