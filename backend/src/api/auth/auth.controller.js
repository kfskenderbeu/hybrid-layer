import { userService } from "../../../services/user.service.js";
import { generateToken } from "../../../utils/jwt.js";

export const registerUser = async (req, res, next) => {
  try {
    const user = await userService.create(req.body);
    const token = generateToken(user.id);

    return res.json({
      success: true,
      token,
      user,
    });
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const user = await userService.login(req.body.email, req.body.password);
    const token = generateToken(user.id);

    return res.json({
      success: true,
      token,
      user,
    });
  } catch (err) {
    next(err);
  }
};

export const me = async (req, res) => {
  return res.json({
    success: true,
    user: req.user,
  });
};
