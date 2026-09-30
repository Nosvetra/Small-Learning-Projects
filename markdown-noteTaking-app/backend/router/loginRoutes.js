import express from "express";
import userControllerobj from "../controller/userController.js";
import authControllerobj from "../controller/authController.js";
import authenticate from "../middleware/middleware.js";

const router = express.Router();
const userController = new userControllerobj();
const authController = new authControllerobj();

router.post("/", authController.createUser);
router.post("/refresh", authController.refreshAccessToken);
router.get("/:username", authenticate, userController.getUser);
router.patch("/:username", authenticate, userController.patchUser);
router.delete("/:username", authenticate, userController.deleteUser);

export default router;
