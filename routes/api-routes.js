const router = require("express").Router();
const {
  addApprentice,
  getLeads,
} = require("../controllers/apprenticeController");

router.post("/", addApprentice);
router.get("/leads", getLeads);

module.exports = router;
