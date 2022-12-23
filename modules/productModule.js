const mongoose = require("./connection");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  owner: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
