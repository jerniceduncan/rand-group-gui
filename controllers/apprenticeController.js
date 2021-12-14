const Apprentice = require("../models/apprenticeModel");
const leads = require("../utils/leads");
const makeGroups = require("../utils/makeGroups");

let leadCount = 0;
for (lead in leads) leadCount++;

module.exports = {
  addApprentice: async (req, res) => {
    console.log("body ===>", req.body);

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

  getApprentices: async (req, res) => {
    try {
      res.json(await Apprentice.find({}));
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  },
  getLeads: async (req, res) => {
    const leadsArr = [];
    for (lead in leads) leadsArr.push({ name: lead, id: leads[lead] });
    res.json(leadsArr);
  },

  getRandomizedGroups: async (req, res) => {
    try {
      const allApprentices = await Apprentice.find({});
      res.json(makeGroups(allApprentices, leadCount));
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  },
};
