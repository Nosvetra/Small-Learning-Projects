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
    const objid = await this.userRepo.createUser(data);

    const accessToken = jwt.sign(
      { userId: objid._id },
      config.jwtAccessSecret,
      {
        expiresIn: "15s",
      },
    );

    const refreshToken = jwt.sign(
      { userId: objid._id },
      config.jwtRefreshSecret,
      { expiresIn: "7d" },
    );
    return { accessToken, refreshToken };
  }
}
