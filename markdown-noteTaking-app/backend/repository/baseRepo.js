import model from "./../models/note.js";

class baseRepository {
  constructor(model) {
    this.model = model;
  }

  async createNote(data) {
    return await this.model.create(data);
  }

  async updateNote(_id, update) {
    return await this.model.findOneAndUpdate({ _id }, update, { new: true });
  }

  async getLimitedArticles() {
    return await this.model.find().limit(10);
  }
}

export default baseRepository;
