const UsersModel = require("../models/users");

//Get All User
const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    res.json({
      message: "Get All Users Successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

//Create New User
const createNewUser = async (req, res) => {
  const { body } = req;
  try {
    await UsersModel.createNewUser(body);
    res.json({
      message: "Create New User Successfully",
      data: body
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

//Update User
const updateUser = (req, res) => {
  const { id } = req.params;
  console.log("Id: ", id);
  res.json({
    message: "Update User Successfully",
    data: req.body,
  });
};

//Delete User
const deleteUser = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Delete User Successfully",
    data: id,
    name: "Danu",
    email: "danu@gmail.com",
    address: "Tangerang Selatan",
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
