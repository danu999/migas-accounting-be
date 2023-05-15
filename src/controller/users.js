const getAllUsers = (req, res) => {
  res.json({
    message: "Get all users succsessfully",
  });
};

const createNewUser = (req, res) => {
  res.json({
    message: "Create new users succsessfully",
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
};
