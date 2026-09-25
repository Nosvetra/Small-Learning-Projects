import baseRepository from "../repository/baseRepo.js";
import articleNote from "./../models/note.js";

class articleServices {
  constructor() {
    this.noteRepo = new baseRepository(articleNote);
  }
  async articlePost(data) {
    return await this.noteRepo.createNote(data);
  }
  async getParticularArticle(idString) {
    return await this.noteRepo.getParticularArticle(idString);
  }
  async patchArticle(data) {
    console.log(data);
  }
  async getLimitedArticles() {
    return await this.noteRepo.getLimitedArticles();
  }
}

export default articleServices;
// "/articles/new"
// "/articleid:"
// "/articleid:/edit"
// "/articleid:/delete"
