const router = require("express").Router();
const { addApprentice } = require("../controllers/apprenticeController");

router.post("/", addApprentice);

module.exports = router;
