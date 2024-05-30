const mongoose = require("mongoose");
const Contact = require("../model/contact.js");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wpu", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected");
}

// let selvi = new Contact({
//   nama: "selvi",
//   email: "selvi@gmail.com",
//   nohp: "081212341234",
// });

// selvi.save().then((contact) => {
//   console.log(contact);
// });
