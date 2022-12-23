const productController = require("../controllers/productController");
const router = require("express").Router();

router.get("/", productController.getProducts);
router.post("/", productController.addProduct);
router.delete("/:id", productController.deleteProduct);
router.put("/:id", productController.updateProduct);

module.exports = router;
