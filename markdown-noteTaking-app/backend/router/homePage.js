import express from "express";
import articleController from "../controller/articleController.js";

const router = express.Router();

router.get("/", articleController.showLimitedArticles);
export default router;
