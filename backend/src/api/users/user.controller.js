import { userService } from "../../../services/user.service.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getAll();
    return res.json({
      success: true,
      users,
    });
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await userService.findById(parseInt(req.params.id));
    if (!user) throw { status: 404, message: "User not found" };

    return res.json({
      success: true,
      user,
    });
  } catch (err) {
    next(err);
  }
};
