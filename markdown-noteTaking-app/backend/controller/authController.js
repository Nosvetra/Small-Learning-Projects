import authenticationServices from "../services/authServices.js";
export default class authController {
  constructor() {
    this.authService = new authenticationServices();
  }
  createUser = async (req, res, next) => {
    const response = await this.authService.createNewUser(req.body);
    res.json({ accesstoken: response });
  };
}
