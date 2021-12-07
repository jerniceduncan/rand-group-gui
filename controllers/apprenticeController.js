const Apprentice = require("../models/apprenticeModel");
const leads = require("../utils/leads");

module.exports = {
  addApprentice: async (req, res) => {
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
  getLeads: async (req, res) => {
    res.json(leads);
  },
};
