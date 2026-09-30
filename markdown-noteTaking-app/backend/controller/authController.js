import authenticationServices from "../services/authServices.js";
export default class authController {
  constructor() {
    this.authService = new authenticationServices();
  }
  createUser = async (req, res, next) => {
    const response = await this.authService.createNewUser(req.body);
    res.json({
      accesstoken: response.accessToken,
      refreshToken: response.refreshToken,
    });
  };

  refreshAccessToken = async (req, res, next) => {
    const { refreshToken } = req.body;

    if (typeof refreshToken !== "string" || !refreshToken) {
      return res.status(400).json({ message: "refreshToken is required" });
    }

    const accessToken = await this.authService.createAccessToken(refreshToken);

    if (!accessToken) {
      return res.status(401).json({ message: "Invalid or expired refresh token" });
    }

    return res.json({ accesstoken: accessToken });
  };
}
