import userServices from "./../services/userServices.js";

export default class userController {
  constructor() {
    this.userService = new userServices();
  }

  getUser = async (req, res, next) => {
    return await this.userService.getUser(username);
  };
  patchUser = async (req, res, next) => {
    return await this.userService.updateUser(data);
  };

  deleteUser = async (req, res, next) => {
    return await this.userService.deleteUser(username);
  };
}
