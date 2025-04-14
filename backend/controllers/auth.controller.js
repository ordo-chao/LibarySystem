// controllers/auth.controller.js
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client("398653173102-qqb6km1sjdmqiur21vgkorfnrukcdppc.apps.googleusercontent.com");

const googleLogin = async (req, res) => {
  const { idToken } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: client._clientId,
    });

    const payload = ticket.getPayload();
    res.json({ email: payload.email, name: payload.name });
  } catch (error) {
    console.error('Google Login Failed:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};


module.exports = googleLogin;
