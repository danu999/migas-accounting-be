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
  if (!body.email || !body.name || !body.addres) {
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      data: null,
    });
  }

  try {
    await UsersModel.createNewUser(body);
    res.status(201).json({
      message: "CREATE new user success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

//Update User
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await UsersModel.updateUser(body, id);
    res.json({
      message: "UPDATE user success",
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

//Delete User
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UsersModel.deleteUser(id);
    res.json({
      message: "DELETE user success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
