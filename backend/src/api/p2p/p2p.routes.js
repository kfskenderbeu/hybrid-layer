import express from "express";
import { registerPeer, getPeers, getBestPeer } from "./p2p.controller.js";

const router = express.Router();

router.post("/register", registerPeer);
router.get("/list", getPeers);
router.get("/best", getBestPeer);

export default router;
