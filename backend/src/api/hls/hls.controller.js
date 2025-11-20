import { hlsService } from "../../../services/hls.service.js";

export const buildMaster = async (req, res, next) => {
  try {
    const result = await hlsService.createMasterPlaylist(req.body);
    return res.json({ success: true, playlist: result });
  } catch (err) {
    next(err);
  }
};

export const buildVariant = async (req, res, next) => {
  try {
    const result = await hlsService.createVariantPlaylist(req.body);
    return res.json({ success: true, playlist: result });
  } catch (err) {
    next(err);
  }
};
