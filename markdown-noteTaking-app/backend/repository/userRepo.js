import baseRepository from "./baseRepo.js";
import userModel from "../models/userModel.js";

export default class userRepository extends baseRepository {
  constructor() {
    super(userModel);
  }

  async createUser(data) {
    try {
      return this.model.create(data);
    } catch (err) {
      console.log(err);
    }
  }

  async getUserByUsername(userName) {
    try {
      return await this.model.findOne({ username: userName });
    } catch (err) {
      console.error(err);
    }
  }

  async getUser(userId) {
    try {
      return await this.model.findById(userId);
    } catch (err) {
      console.error(err);
    }
  }

  async updateUser(_id, update) {
    try {
      return await this.model.findOneAndUpdate({ _id }, update, {
        returnDocument: "after",
      });
    } catch (err) {
      console.log(err);
    }
  }
  async deleteUser(username) {
    try {
      return await this.model.deleteOne({ username });
    } catch (err) {
      console.log(err);
    }
  }
}
