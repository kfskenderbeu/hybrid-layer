import express from "express";
import { uploadFile, signUrl, selectEdge } from "./cdn.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/upload", authMiddleware, uploadFile);
router.get("/sign", authMiddleware, signUrl);
router.get("/edge/select", selectEdge); // public

export default router;
