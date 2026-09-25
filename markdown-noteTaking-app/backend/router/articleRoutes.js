import express from "express";

import controller from "../controller/articleController.js";

const articleController = new controller();
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
