import express from "express";
import authenticate from "../middleware/middleware.js";
const router = express.Router();

import articleRoutes from "./articleRoutes.js";
import homePage from "./homePage.js";
import loginRoutes from "./loginRoutes.js";

router.use("/", homePage);
router.use("/articles", authenticate, articleRoutes);
router.use("/login", loginRoutes);

export default router;
