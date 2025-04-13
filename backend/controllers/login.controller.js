const loginModel = require("../Models/login.model");

const getRouter = (req, res) => {
  console.log(req.body);
  const login = new loginModel.create(req.body);
  res.status(200).json({
    message: "Login successfully"
  })
}

module.exports = {
  getRouter
}