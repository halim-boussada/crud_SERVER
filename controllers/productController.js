const Product = require("../modules/productModule");

const getProducts = async (req, res) => {
  var Products = await Product.find({}).populate("owner");
  res.send(Products);
};

const addProduct = async (req, res) => {
  var newProduct = new Product(req.body);
  newProduct.save();
  res.send({ message: "inserted" });
};

const updateProduct = async (req, res) => {
  await Product.updateOne({ _id: req.params.id }, req.body);
  res.send({ message: "updated" });
};

const deleteProduct = async (req, res) => {
  await Product.deleteOne({ _id: req.params.id });
  res.send({ message: "deleted" });
};

module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
