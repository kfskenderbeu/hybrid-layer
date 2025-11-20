import express from "express";
import { getStats, getCdnInfo, getP2PInfo, getHlsInfo, getUserStats } from "./admin.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/stats", authMiddleware, getStats);
router.get("/cdn", authMiddleware, getCdnInfo);
router.get("/p2p", authMiddleware, getP2PInfo);
router.get("/hls", authMiddleware, getHlsInfo);
router.get("/users", authMiddleware, getUserStats);

export default router;
