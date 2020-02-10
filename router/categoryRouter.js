const express = require("express");
const { categoryController } = require("../controller");
const router = express.Router();

router.get("/getcat", categoryController.getCategory);
router.post("/addcat", categoryController.addCategory);
router.put("/updatecat/:id", categoryController.updateCategory);
router.delete("/deletecat/:id", categoryController.deleteCategory);

module.exports = router;
