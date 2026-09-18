import express from "express";
const router = express.Router();

import articleRoutes from "./articleRoutes.js";
import homePage from "./homePage.js";

router.use("/", homePage);
router.use("/articles", articleRoutes);

export default router;
