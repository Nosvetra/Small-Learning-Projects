import express from "express";
import userControllerobj from "../controller/userController.js";
import authControllerobj from "../controller/authController.js";

const router = express.Router();
const userController = new userControllerobj();
const authController = new authControllerobj();

router.post("/", authController.createUser);
router.post("/:username", userController.getUser);
router.patch("/:username", userController.patchUser);
router.delete("/:username", userController.deleteUser);

export default router;
