const User = require("../models/user");

exports.adminAuthMiddleware = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user.isAdmin) {
      return res
        .status(403)
        .json({ message: "Access forbidden. User is not an admin" });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
