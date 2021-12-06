const Apprentice = require("../models/apprenticeModel");

module.exports = {
  addApprentice: async (req, res) => {
    console.log("backend was hit");

    try {
      const newAppr = new Apprentice({
        name: req.body.name,
        leadID: req.body.leadID,
      });

      res.json(await newAppr.save());
    } catch (err) {
      res.json({ msg: err });
    }
  },
};
