import { p2pService } from "../../../services/p2p.service.js";

export const registerPeer = async (req, res, next) => {
  try {
    const peer = await p2pService.register(req.body);
    return res.json({ success: true, peer });
  } catch (err) {
    next(err);
  }
};

export const getPeers = async (req, res, next) => {
  try {
    const peers = await p2pService.getAll();
    return res.json({ success: true, peers });
  } catch (err) {
    next(err);
  }
};

export const getBestPeer = async (req, res, next) => {
  try {
    const peer = await p2pService.getBestPeer();
    return res.json({ success: true, peer });
  } catch (err) {
    next(err);
  }
};
