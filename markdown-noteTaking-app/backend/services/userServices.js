import userRepository from "./../repository/userRepo.js";
import bcrypt from "bcrypt";
import config from "../config/index.js";
import jwt from "jsonwebtoken";

export default class userService {
  constructor() {
    this.userRepo = new userRepository();
  }

  async verifyUser(data) {
    const dbRes = await this.userRepo.getUserByUsername(data.username);
    if (!dbRes) {
      throw new Error("invalid Credentials");
    }
    const isMatch = await bcrypt.compare(data.password, dbRes.password);
    if (isMatch) {
      const refreshToken = jwt.sign(
        {
          userId: dbRes._id,
        },
        config.jwtRefreshSecret,
        {
          expiresIn: "7d",
        },
      );
      const accessToken = jwt.sign(
        { userId: dbRes._id },
        config.jwtAccessSecret,
        { expiresIn: "15m" },
      );
      return { refreshToken, accessToken };
    }
  }

  async updateUser(data) {
    data["updatedData"].password = await bcrypt.hash(
      data["updatedData"].password,
      10,
    );
    return await this.userRepo.updateUser(data["userId"], data["updatedData"]);
  }
  async getUser(username) {
    return await this.userRepo.getUser(username);
  }
  async deleteUser(username) {
    return await this.userRepo.deleteUser(username);
  }
}
