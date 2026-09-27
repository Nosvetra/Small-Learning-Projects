import baseRepository from "../repository/baseRepo.js";
import articleNote from "./../models/note.js";

class articleServices {
  constructor() {
    this.noteRepo = new baseRepository(articleNote);
  }
  async articlePost(data, user) {
    data.createdBy = user.userId;
    return await this.noteRepo.createNote(data);
  }
  async getParticularArticle(idString) {
    return await this.noteRepo.getParticularArticle(idString);
  }
  async patchArticle(id, data) {
    return await this.noteRepo.updateNote(id, data);
  }
  async getLimitedArticles() {
    return await this.noteRepo.getLimitedArticles();
  }
  async deleteArticle(id) {
    return await this.noteRepo.deleteArticle(id);
  }
}

export default articleServices;
// "/articles/new"
// "/articleid:"
// "/articleid:/edit"
// "/articleid:/delete"
