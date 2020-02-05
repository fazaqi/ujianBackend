const express = require("express");
const { movieController } = require("../controller");
const router = express.Router();

router.get("/getmovie", movieController.getMovie);
router.post("/addmovie", movieController.addMovie);
router.put("/updatemovie/:id", movieController.updateMovie);
router.delete("/deletemovie/:id", movieController.deleteMovie);

module.exports = router;
