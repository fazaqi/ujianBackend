const express = require("express");
const { movcatController } = require("../controller");
const router = express.Router();

router.get("/getmovcat", movcatController.getMovcat);
router.post("/addmovcat", movcatController.addMovcat);
router.post("/deletemovcat", movcatController.deleteMovcat);

module.exports = router;
