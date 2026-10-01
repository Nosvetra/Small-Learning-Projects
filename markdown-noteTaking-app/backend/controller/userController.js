import userServices from "./../services/userServices.js";

export default class userController {
  constructor() {
    this.userService = new userServices();
  }

  verifyUser = async (req, res, next) => {
    const { refreshToken, accessToken } = await this.userService.verifyUser(
      req.body,
    );
    res.json({ refreshToken: refreshToken, accessToken: accessToken });
  };

  getUser = async (req, res, next) => {
    const { _id, name, username, createdAt, updatedAt } =
      await this.userService.getUser(req.user["userId"]);
    res.send({ _id, name, username, createdAt, updatedAt });
  };
  patchUser = async (req, res, next) => {
    let data = {
      userId: req.user["userId"],
      updatedData: req.body,
    };

    return await this.userService.updateUser(data);
  };

  deleteUser = async (req, res, next) => {
    return await this.userService.deleteUser(username);
  };
}
