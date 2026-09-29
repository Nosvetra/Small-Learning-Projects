import env from "dotenv";
env.config();

const config = {
  port: process.env.PORT || 3000,
  mongodb: {
    uri: process.env.MONGODB_CONNECT_URI,
  },
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
    Credentials: true,
  },
  jwtAccessSecret: process.env.JWT_ACCESS_SECRET,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
};

export default config;
