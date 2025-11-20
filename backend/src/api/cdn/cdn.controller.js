import { cdnService } from "../../../services/cdn.service.js";

export const uploadFile = async (req, res, next) => {
  try {
    const result = await cdnService.upload(req.body);
    return res.json({ success: true, result });
  } catch (err) {
    next(err);
  }
};

export const signUrl = async (req, res, next) => {
  try {
    const url = req.query.url;
    const signed = await cdnService.signUrl(url);
    return res.json({ success: true, signed });
  } catch (err) {
    next(err);
  }
};

export const selectEdge = async (req, res, next) => {
  try {
    const edge = await cdnService.getBestEdge();
    return res.json({ success: true, edge });
  } catch (err) {
    next(err);
  }
};
