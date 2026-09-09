import config from "./config/index.js";
import express from "express";
import cors from "cors";
import apiRoutes from "./router/indexRoute.js";

const app = express();

app.use(
  cors({
    origin: config.cors.origin,
    credentials: config.cors.Credentials,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use("/", apiRoutes);

export default app;
