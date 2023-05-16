//Get All User
const getAllUsers = (req, res) => {
  const data = {
    id: "1",
    name: "Danu",
    email: "danu12@gmail.com",
    address: "Tangerang",
  };
  res.json({
    message: "Get All Users Successfully",
    data: data,
  });
};

//Create New User
const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "Create New User Successfully",
    data: req.body,
  });
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
