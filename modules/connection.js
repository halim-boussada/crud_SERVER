const mongoose = require("mongoose");
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    "mongodb+srv://halim:20028952halim@cluster0.p5azazt.mongodb.net/?retryWrites=true&w=majority"
  );
}

module.exports = mongoose;
