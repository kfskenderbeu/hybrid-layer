import express from "express";
import authRoutes from "./auth/auth.routes.js";
import userRoutes from "./users/user.routes.js";
import cdnRoutes from "./cdn/cdn.routes.js";
import p2pRoutes from "./p2p/p2p.routes.js";
import hlsRoutes from "./hls/hls.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/cdn", cdnRoutes);
router.use("/p2p", p2pRoutes);
router.use("/hls", hlsRoutes);

export default router;
