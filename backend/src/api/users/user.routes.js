import express from "express";
import { getUsers, getUserById } from "./user.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, getUsers);
router.get("/:id", authMiddleware, getUserById);

export default router;
