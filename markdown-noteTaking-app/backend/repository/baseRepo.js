class baseRepository {
  constructor(model) {
    this.model = model;
  }

  async createNote(data) {
    const note = this.model.create(data);
    return await note.save();
  }

  async updateNote(data) {
    const note = this.model.findOneAndUpdate(_id, update, options);
  }
}

export default baseRepository;
