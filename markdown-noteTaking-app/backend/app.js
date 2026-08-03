import config from "./config";
import express from "express";
import cors from "cors";

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

app.use("/", indexRoutes);

export default app;
