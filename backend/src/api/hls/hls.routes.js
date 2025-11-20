import express from "express";
import { buildMaster, buildVariant } from "./hls.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = express.Router();

// Krijon master playlist-in (multi-resolution)
router.post("/master", authMiddleware, buildMaster);

// Krijon një variant m3u8 (p.sh. 720p, 480p)
router.post("/variant", authMiddleware, buildVariant);

export default router;
