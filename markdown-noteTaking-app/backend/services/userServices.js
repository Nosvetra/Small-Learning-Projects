import userRepository from "./../repository/userRepo.js";

export default class userService {
  constructor() {
    this.userRepo = new userRepository();
  }
  async updateUser(data) {
    return await this.userRepo.updateUser(data.id, data.update);
  }
  async getUser(username) {
    return await this.userRepo.getUser(username);
  }
  async deleteUser(username) {
    return await this.userRepo.deleteUser(username);
  }
}
