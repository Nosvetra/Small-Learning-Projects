import express from "express";
const router = express.Router();

import articleRoutes from "./articleRoutes.js";
import homePage from "./homePage.js";
import loginRoutes from "./loginRoutes.js";

router.use("/", homePage);
router.use("/articles", articleRoutes);
router.use("/login", loginRoutes);

export default router;
