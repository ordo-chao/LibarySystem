const userSchema = require("../Models/user.model");

const getProfile = async (req, res) => {
  const user = await userSchema.findById(req.body.id) // ✅ returns plain object
  res.json(user);
};

const createUser = (req, res) => {
  const user = new userSchema(req.body);
  user.save();
  res.status(201).json({
    message: "User created successfully"
  });
};

module.exports = {getProfile , createUser};