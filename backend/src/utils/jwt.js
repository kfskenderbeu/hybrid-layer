import jwt from "jsonwebtoken";
import { loadConfig } from "../config/index.js";
import { userService } from "../services/user.service.js";

const config = loadConfig();

export const generateToken = (id) => {
  return jwt.sign({ id }, config.JWT_SECRET, { expiresIn: "7d" });
};

export const verifyToken = async (token) => {
  const decoded = jwt.verify(token, config.JWT_SECRET);
  const user = await userService.findById(decoded.id);
  return user;
};
