import express from "express";

const router = express.Router();

router.post("/new", (req, res) => {
  res.json({ message: "this is the /articles/new/ post but On get Rn" });
});

router.get("/:articleId", (req, res) => {
  res.json({ message: "hellods" });
});

router.patch("/:articleId/edit", (req, res) => {});

router.delete("/:articleId/delete", (req, res) => {});

export default router;

// "/articles/new"
// "/articleid:"
// "/articleid:/edit"
// "/articleid:/delete"
