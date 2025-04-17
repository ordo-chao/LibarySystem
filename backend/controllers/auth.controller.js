// controllers/auth.controller.js
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client("398653173102-qqb6km1sjdmqiur21vgkorfnrukcdppc.apps.googleusercontent.com");
const userSchema = require("../Models/user.model");

const googleLogin = async (req, res) => {
  const { idToken } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: client._clientId,
    });

    const payload = ticket.getPayload();

    const user = new userSchema(
      {
        name: payload.name,
        email: payload.email,
        password: generateRandomString(12),
        role: 'user',
        wishlist: req.body.wishlist,
        orders: req.body.orders,
        address: req.body.address,
        profilePic: req.body.profilePic,
        createdAt: req.body.createdAt
      });
    user.save();
    console.log(user);
    res.status(201).json({
      success: true
    });
  } catch (error) {
    console.error('Google Login Failed:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};


function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}


module.exports = googleLogin;
