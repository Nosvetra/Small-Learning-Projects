import jwt from "jsonwebtoken";
import config from "./../config/index.js";

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!authHeader) {
    return res.status(401).json({
      message: "unathorized",
    });
  }

  try {
    const decoded = jwt.verify(token, config.jwtAccessSecret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

export default authenticate;
