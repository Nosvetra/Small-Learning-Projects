import express from "express";
import controller from "../controller/articleController.js";

const router = express.Router();
const articleController = new controller();

router.get("/", articleController.showLimitedArticles);
export default router;
