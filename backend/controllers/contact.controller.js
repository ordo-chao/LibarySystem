const contactSchema = require("../Models/contact.model");


const ContactController = async (req, res) => {
  try {
    const contact = await contactSchema.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = ContactController;