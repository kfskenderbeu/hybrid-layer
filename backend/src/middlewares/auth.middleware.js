import { verifyToken } from "../utils/jwt.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) throw { status: 401, message: "No token provided" };

    const token = header.replace("Bearer ", "");
    const user = await verifyToken(token);

    if (!user) throw { status: 401, message: "Invalid token" };

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};
