const getAllUsers = (req, res) => {
  res.json({
    message: "Get all users successfully",
  });
};

const createNewUser = (req, res) => {
  res.json({
    message: "Create new users successfully",
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
};
