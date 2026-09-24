import express from "express";
import articleController from "../controller/articleController.js";

const router = express.Router();

router.post("/new", articleController.articlePost);

router.get("/:articleId", articleController.particularArticle);

router.patch("/:articleId/edit", articleController.editArticle);

router.delete("/:articleId/delete", articleController.deleteArticle);

export default router;

// "/articles/new"
// "/articleid:"
// "/articleid:/edit"
// "/articleid:/delete"
