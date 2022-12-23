const userController = require("../controllers/userController");
const router = require("express").Router();

router.get("/", userController.getUsers);
router.post("/", userController.addUser);
router.delete("/:id", userController.deleteUser);
router.put("/:id", userController.updateUser);

module.exports = router;
