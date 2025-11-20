import os from "os";
import { userService } from "../../../services/user.service.js";
import { p2pService } from "../../../services/p2p.service.js";
import { cdnService } from "../../../services/cdn.service.js";
import { hlsService } from "../../../services/hls.service.js";

export const getStats = async (req, res) => {
  return res.json({
    success: true,
    system: {
      load: os.loadavg(),
      uptime: os.uptime(),
      memory: {
        free: os.freemem(),
        total: os.totalmem(),
      },
    },
  });
};

export const getCdnInfo = async (req, res) => {
  return res.json({
    success: true,
    cdn: {
      edges: ["edge1", "edge2", "edge3"],
      mock: true,
    },
  });
};

export const getP2PInfo = async (req, res) => {
  const peers = await p2pService.getAll();
  const best = await p2pService.getBestPeer();

  return res.json({
    success: true,
    count: peers.length,
    peers,
    best,
  });
};

export const getHlsInfo = async (req, res) => {
  return res.json({
    success: true,
    hls: "HLS builder operational (dummy)",
  });
};

export const getUserStats = async (req, res) => {
  const users = await userService.getAll();
  return res.json({
    success: true,
    totalUsers: users.length,
  });
};
