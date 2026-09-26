import userRepository from "./../repository/userRepo.js";
import bcrypt from "bcrypt";
import config from "./../config/index.js";
import jwt from "jsonwebtoken";

const saltRounds = 10;
export default class authenticationServices {
  constructor() {
    this.userRepo = new userRepository();
  }
  async createNewUser(data) {
    data.password = await bcrypt.hash(data.password, saltRounds);
    await this.userRepo.createUser(data);

    const accessToken = jwt.sign(
      { userId: data.username },
      config.sessionSecret,
      {
        expiresIn: "2d",
      },
    );
    return accessToken;
  }
}
