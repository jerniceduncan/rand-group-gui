const router = require("express").Router();
const {
  addApprentice,
  getApprentices,
  getLeads,
  getRandomizedGroups,
} = require("../controllers/apprenticeController");

router.get("/", (req, res) => {
  res.send("success");
});
router.post("/", addApprentice);
router.get("/appr", getApprentices);
router.get("/leads", getLeads);
router.get("/groups", getRandomizedGroups);

module.exports = router;
