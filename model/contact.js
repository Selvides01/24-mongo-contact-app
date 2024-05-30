const mongoose = require("mongoose");

const { Schema } = mongoose;
const contact = new Schema({
  nama: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  nohp: {
    type: String,
    required: true,
  },
});
const Contact = mongoose.model("Contact", contact);

module.exports = Contact;
