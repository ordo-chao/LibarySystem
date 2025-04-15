const contactSchema = require("../Models/contact.model");
const nodemailer = require("nodemailer");

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "princeben9312@gmail.com",       
    pass: "qcgw dviu xhgo ahnm ",          
  },
});

// Email options
;


const ContactController = async (req, res) => {
  try {
    const contact = await contactSchema.create(req.body);

    const mailOptions = {
      from: "princeben9312@gmail.com",
      to: req.body.email,
      subject: req.body.subject,
      text: req.body.message,
    }


    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log("Error:", error);
      }
      console.log("Email sent:", info.response);
    });

    res.status(201).json(
      {
        message: "Message sent successfully"
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = ContactController;